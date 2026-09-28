"""Download unique placeholder photos per service (structural stand-ins)."""
from __future__ import annotations

import json
import ssl
import time
import urllib.request
from pathlib import Path

ROOT = Path(r"c:\Shubham\inhouse\webastral\webastral\webastral-main")
CONTENT = ROOT / "src" / "lib" / "service-content.json"
SERVICES = ROOT / "public" / "assets" / "images" / "services"

# Unique Pexels photo IDs — placeholders only, to be replaced with studio shots.
PEXELS_IDS = [
    3184291, 3184292, 3184296, 3184306, 3184311, 3184315, 3184325, 3184338,
    3184339, 3184340, 3184357, 3184360, 3184394, 3184418, 3184421, 3184430,
    3184431, 3184433, 3184465, 3184611, 3184632, 3184639, 3184644, 3182746,
    3182770, 3182781, 3182812, 3182834, 3183150, 3183153, 3183165, 3183171,
    3183183, 3183186, 3183190, 3183197, 1181244, 1181263, 1181298, 1181316,
    1181354, 1181467, 1181472, 1181675, 1181690, 1181715, 1181772, 1181290,
    574071, 574070, 546819, 577585, 592638, 943096, 1089440, 1181677,
    1181243, 1181255, 1181271, 1181275, 1181292, 1181355, 1181406, 1181465,
    1181471, 1181625, 1181673, 1181676, 1181719, 1181721, 196644, 196645,
    265087, 267350, 267389, 270408, 276452, 326503, 326505, 326508,
    374074, 374016, 374895, 3861969, 3861972, 4050290, 4050315, 4348404,
    4348401, 5473298, 5483077, 5926382, 6804581, 6804604, 7688336, 7988079,
    3861958, 3861964, 3861976, 1181248, 1181258, 1181280, 1181311, 1181320,
    1181345, 1181359, 1181408, 1181435, 1181519, 1181562, 1181619, 1181671,
    1181686, 1181742, 1181775, 1476321, 1591060, 1601070, 1714208, 1779487,
    2004161, 2047905, 2115217, 230544, 245032, 3182773, 3182787, 3182811,
    3182826, 3182835, 3182847, 1182126, 1182140, 1591061, 1591062, 2252503,
    248515, 267394, 270360, 276467, 3182796, 3182822, 3182833, 3182843,
    3861967, 1181325, 1181371, 1181396, 1181449, 1181450, 1181483, 1181533,
    1181568, 1181575, 1181622, 1181634, 1181656, 1181661, 1181681, 1181712,
    1181725, 1181732, 1181748, 1181765,
]

SLOTS = ("overview.jpg", "detail.jpg", "contact.jpg")
CTX = ssl.create_default_context()


def pexels_url(photo_id: int, width: int) -> str:
    return (
        f"https://images.pexels.com/photos/{photo_id}/pexels-photo-{photo_id}.jpeg"
        f"?auto=compress&cs=tinysrgb&w={width}"
    )


def download(url: str, dest: Path) -> None:
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 WebAstralPlaceholder/1.0"},
    )
    with urllib.request.urlopen(req, context=CTX, timeout=45) as res:
        data = res.read()
    if len(data) < 4000:
        raise RuntimeError(f"tiny file {len(data)} from {url}")
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)


def fetch_unique(photo_id: int, dest: Path, width: int) -> None:
    last_err: Exception | None = None
    for offset in range(8):
        try:
            download(pexels_url(PEXELS_IDS[(photo_id + offset) % len(PEXELS_IDS)], width), dest)
            return
        except Exception as err:  # noqa: BLE001
            last_err = err
            time.sleep(0.4)
    raise RuntimeError(f"failed {dest}: {last_err}")


def main() -> None:
    services = json.loads(CONTENT.read_text(encoding="utf-8"))
    cursor = 0
    for service in services:
        slug = service["slug"]
        folder = SERVICES / slug
        folder.mkdir(parents=True, exist_ok=True)

        hero_png = folder / "hero.png"
        hero_jpg = folder / "hero.jpg"
        if not hero_png.exists() and not hero_jpg.exists():
            fetch_unique(cursor, hero_jpg, 1600)
            cursor += 1
            print(f"hero {slug}", flush=True)

        widths = {"overview.jpg": 1600, "detail.jpg": 1200, "contact.jpg": 1600}
        for name in SLOTS:
            dest = folder / name
            if dest.exists() and dest.stat().st_size > 4000:
                cursor += 1
                continue
            fetch_unique(cursor, dest, widths[name])
            cursor += 1
            print(f"{name} {slug}", flush=True)

        gitkeep = folder / ".gitkeep"
        if gitkeep.exists():
            gitkeep.unlink()

        service["image"] = (
            f"/assets/images/services/{slug}/hero.png"
            if hero_png.exists()
            else f"/assets/images/services/{slug}/hero.jpg"
        )

    CONTENT.write_text(
        json.dumps(services, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print("done", flush=True)


if __name__ == "__main__":
    main()
