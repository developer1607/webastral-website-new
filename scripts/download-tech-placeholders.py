"""Overwrite service photos with laptop / code / device stock (structural stand-ins)."""
from __future__ import annotations

import json
import ssl
import time
import urllib.request
from pathlib import Path

ROOT = Path(r"c:\Shubham\inhouse\webastral\webastral\webastral-main")
CONTENT = ROOT / "src" / "lib" / "service-content.json"
SERVICES = ROOT / "public" / "assets" / "images" / "services"

# Pexels photo IDs: laptops, code, phones, analytics, retail, design desks.
# Placeholders only — replace with studio / client shots later.
POOLS: dict[str, list[int]] = {
    "code": [
        574071, 546819, 577585, 1181675, 1181244, 1181467, 1714208, 2047905,
        3861969, 1181298, 1181316, 1181354, 1181263, 1181243, 1591060, 1779487,
        2004161, 1181677, 1181690, 1181715, 3861958, 3861964, 4050290, 943096,
        1089440, 1476321, 1601070, 1181406, 1181471, 1181625, 1181673, 196644,
        326503, 326505, 374016, 374074, 1181255, 1181271, 1181465, 1181719,
        1181721, 267350, 270408, 276452, 326508, 4348404, 5483077, 6804604,
        7688336, 1181772, 1181290, 3861972, 3861976, 1181355, 1181408, 1181622,
        1181676, 1181712, 270360, 1181248, 1181258, 1181280, 1181311, 1181320,
        1181345, 1181359, 1181435, 1181519, 1181562, 1181619, 1181671, 1181686,
        1181742, 1181775, 2115217, 3183150, 3861976, 4050315, 4709285, 1181396,
    ],
    "phone": [
        607812, 47261, 699122, 1092644, 1447254, 404280, 788946, 1275229,
        147413, 887751, 1092671, 129208, 47261, 607812, 699122, 404280,
        788946, 1447254, 1275229, 887751, 1092644, 147413, 129208, 607812,
    ],
    "shop": [
        230544, 264636, 1488463, 5632402, 5632398, 5632397, 5632401, 3944405,
        5632371, 4968391, 5632381, 5632403, 230544, 264636, 1488463, 3944405,
    ],
    "design": [
        196644, 196645, 326503, 3184454, 326505, 326508, 196645, 4348404,
        196644, 3184465, 3184418, 3184394, 374016, 196645, 326503, 4348404,
    ],
    "analytics": [
        590022, 265087, 669610, 590016, 590041, 669615, 669619, 590020,
        265087, 590022, 669610, 590016, 3183150, 3183165, 3183171, 590041,
    ],
}

CATEGORY_POOL = {
    "Web Design": "design",
    "CMS": "code",
    "Framework": "code",
    "Mobile App Development": "phone",
    "Web Development": "code",
    "Ecommerce Development": "shop",
    "Graphic Design": "design",
    "Digital Marketing": "analytics",
}

SLOTS = {
    "overview.jpg": 1600,
    "detail.jpg": 1400,
    "stack.jpg": 1400,
    "contact.jpg": 1600,
}
CTX = ssl.create_default_context()


def pexels_url(photo_id: int, width: int) -> str:
    return (
        f"https://images.pexels.com/photos/{photo_id}/pexels-photo-{photo_id}.jpeg"
        f"?auto=compress&cs=tinysrgb&w={width}"
    )


def download(url: str, dest: Path) -> None:
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 WebAstralPlaceholder/1.2"},
    )
    with urllib.request.urlopen(req, context=CTX, timeout=45) as res:
        data = res.read()
    if len(data) < 8000:
        raise RuntimeError(f"tiny file {len(data)} from {url}")
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)


def fetch(photo_ids: list[int], start: int, dest: Path, width: int, used: set[int]) -> int:
    last_err: Exception | None = None
    for offset in range(len(photo_ids)):
        photo_id = photo_ids[(start + offset) % len(photo_ids)]
        if photo_id in used and offset < len(photo_ids) - 1:
            continue
        try:
            download(pexels_url(photo_id, width), dest)
            used.add(photo_id)
            return start + offset + 1
        except Exception as err:  # noqa: BLE001
            last_err = err
            time.sleep(0.25)
    raise RuntimeError(f"failed {dest}: {last_err}")


def main() -> None:
    services = json.loads(CONTENT.read_text(encoding="utf-8"))
    used: set[int] = set()
    cursors: dict[str, int] = {key: 0 for key in POOLS}
    fallback = POOLS["code"]
    fallback_cursor = 0

    for service in services:
        slug = service["slug"]
        folder = SERVICES / slug
        folder.mkdir(parents=True, exist_ok=True)
        pool_name = CATEGORY_POOL.get(service.get("category", ""), "code")
        pool = POOLS[pool_name]

        hero_jpg = folder / "hero.jpg"
        hero_png = folder / "hero.png"
        if not hero_jpg.exists():
            cursors[pool_name] = fetch(pool, cursors[pool_name], hero_jpg, 1600, used)
            print(f"hero {slug}", flush=True)
        if hero_png.exists():
            hero_png.unlink()
        service["image"] = f"/assets/images/services/{slug}/hero.jpg"

        for name, width in SLOTS.items():
            try:
                cursors[pool_name] = fetch(pool, cursors[pool_name], folder / name, width, used)
            except Exception:
                fallback_cursor = fetch(fallback, fallback_cursor, folder / name, width, used)
            print(f"{name} {slug}", flush=True)

        gitkeep = folder / ".gitkeep"
        if gitkeep.exists():
            gitkeep.unlink()

    CONTENT.write_text(
        json.dumps(services, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print("done", flush=True)


if __name__ == "__main__":
    main()
