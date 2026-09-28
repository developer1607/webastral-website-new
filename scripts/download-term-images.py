"""Download service photos matched to the actual tech / service term."""
from __future__ import annotations

import ssl
import time
import urllib.request
from pathlib import Path

ROOT = Path(r"c:\Shubham\inhouse\webastral\webastral\webastral-main")
SERVICES = ROOT / "public" / "assets" / "images" / "services"
SLOTS = ("hero.jpg", "overview.jpg", "detail.jpg", "stack.jpg", "contact.jpg")
CTX = ssl.create_default_context()

# Unsplash photo IDs chosen by search term (Shopify, iPhone, SEO, Laravel, etc.)
PHOTOS: dict[str, list[str]] = {
    "shopify-development": [
        "1556742049-0cfed4f6a45d",
        "1472851294608-062f824d29cc",
        "1441986300917-64674bd600d8",
        "1556742111-a301076d9d18",
        "1483985988106-7a9c4c05c431",
    ],
    "opencart-development": [
        "1556740758-90de1c40f1ec",
        "1523275335684-37898b6b3717",
        "1560343090-f0409e92791a",
        "1542291026-7eec264c27ff",
        "1526170375885-4d8ecf92b378",
    ],
    "magento-development": [
        "1553413077-190dd305871c",
        "1586528116311-ad8dd3c8310d",
        "1566576912321-d58ddd7a6088",
        "1441984904996-e0b6ba687e04",
        "1556742049-0cfed4f6a45d",
    ],
    "woocommerce-development": [
        "1516321318423-f06f85e504b3",
        "1472851294608-062f824d29cc",
        "1556742049-0cfed4f6a45d",
        "1432888498266-38ffec3acd67",
        "1486312338219-ce68d2c6f44d",
    ],
    "custom-e-commerce-development": [
        "1586528116311-ad8dd3c8310d",
        "1553413077-190dd305871c",
        "1566576912321-d58ddd7a6088",
        "1556742111-a301076d9d18",
        "1607082348824-0a96f2a4b9da",
    ],
    "wordpress-development": [
        "1432888498266-38ffec3acd67",
        "1499750310107-5fef28ed8303",
        "1486312338219-ce68d2c6f44d",
        "1461749280684-dccba630e2f6",
        "1454165804606-c3d57bc86b40",
    ],
    "drupal-development": [
        "1454165804606-c3d57bc86b40",
        "1551288049-bebda4e38f71",
        "1499951360447-b19be8fe80f5",
        "1516321318423-f06f85e504b3",
        "1434030216411-0b793f4b4173",
    ],
    "joomla-development": [
        "1499951360447-b19be8fe80f5",
        "1516321318423-f06f85e504b3",
        "1486312338219-ce68d2c6f44d",
        "1553877522-43269d4ea984",
        "1432888498266-38ffec3acd67",
    ],
    "next-js-developement": [
        "1517694712202-14dd9538aa97",
        "1633356122544-f134324a6cee",
        "1461749280684-dccba630e2f6",
        "1555066931-4365d14bab8c",
        "1498050108023-c5249f4df085",
    ],
    "laravel-development": [
        "1515879218367-8466d910aaa4",
        "1542831371-29b0f74f9713",
        "1587620962725-abab7fe55159",
        "1605379399642-24ce946806ac",
        "1627398242454-45a1465c2479",
    ],
    "yii-development": [
        "1542831371-29b0f74f9713",
        "1461749280684-dccba630e2f6",
        "1498050108023-c5249f4df085",
        "1555066931-4365d14bab8c",
        "1515879218367-8466d910aaa4",
    ],
    "angular-js-development": [
        "1517694712202-14dd9538aa97",
        "1555066931-4365d14bab8c",
        "1605379399642-24ce946806ac",
        "1587620962725-abab7fe55159",
        "1461749280684-dccba630e2f6",
    ],
    "codelgniter-development": [
        "1488590528505-98d2b5aba04b",
        "1515879218367-8466d910aaa4",
        "1542831371-29b0f74f9713",
        "1498050108023-c5249f4df085",
        "1587620962725-abab7fe55159",
    ],
    "cakephp-development": [
        "1498050108023-c5249f4df085",
        "1488590528505-98d2b5aba04b",
        "1515879218367-8466d910aaa4",
        "1605379399642-24ce946806ac",
        "1542831371-29b0f74f9713",
    ],
    "php-development": [
        "1515879218367-8466d910aaa4",
        "1488590528505-98d2b5aba04b",
        "1461749280684-dccba630e2f6",
        "1542831371-29b0f74f9713",
        "1627398242454-45a1465c2479",
    ],
    "node-js-development": [
        "1558494949-ef010cbdcc31",
        "1627398242454-45a1465c2479",
        "1605379399642-24ce946806ac",
        "1517694712202-14dd9538aa97",
        "1555066931-4365d14bab8c",
    ],
    "asp-.net-development": [
        "1486312338219-ce68d2c6f44d",
        "1454165804606-c3d57bc86b40",
        "1553877522-43269d4ea984",
        "1461749280684-dccba630e2f6",
        "1498050108023-c5249f4df085",
    ],
    "web-development": [
        "1498050108023-c5249f4df085",
        "1461749280684-dccba630e2f6",
        "1517694712202-14dd9538aa97",
        "1486312338219-ce68d2c6f44d",
        "1553877522-43269d4ea984",
    ],
    "iphone-app-development": [
        "1512941937669-90a1b58e7e9c",
        "1511707171634-5f897ff02aa9",
        "1556656793-08538906a9f8",
        "1510557880182-3d4d3cba35a5",
        "1592899677977-9c10ca588bbd",
    ],
    "ipad-app-development": [
        "1544247790-b4ac6543fea6",
        "1585795333165-cbb32e21b76b",
        "1512941937669-90a1b58e7e9c",
        "1556656793-08538906a9f8",
        "1511707171634-5f897ff02aa9",
    ],
    "android-app-development": [
        "1511707171634-5f897ff02aa9",
        "1607252653024-6d0902715d76",
        "1555774698-0b0aa0c5d4c5",
        "1601784551446-20c9e07cdbdb",
        "1580910051074-3eb6948869d6",
    ],
    "hybrid-app-development": [
        "1512941937669-90a1b58e7e9c",
        "1511707171634-5f897ff02aa9",
        "1556656793-08538906a9f8",
        "1607252653024-6d0902715d76",
        "1517694712202-14dd9538aa97",
    ],
    "web-design": [
        "1561070790-a38673ff345e",
        "1586717791821-8c17c4a41da9",
        "1609921212029-a4529ce7c80f",
        "1558658170-ec87d21d5746",
        "1572044162444-8f27acba5290",
    ],
    "mobile-website": [
        "1512941937669-90a1b58e7e9c",
        "1556656793-08538906a9f8",
        "1510557880182-3d4d3cba35a5",
        "1592899677977-9c10ca588bbd",
        "1511707171634-5f897ff02aa9",
    ],
    "responsive-web-design": [
        "1498050108023-c5249f4df085",
        "1512941937669-90a1b58e7e9c",
        "1544247790-b4ac6543fea6",
        "1561070790-a38673ff345e",
        "1486312338219-ce68d2c6f44d",
    ],
    "parallax-webdesign": [
        "1550684841-74ea8b68d8c6",
        "1500530855697-b586d89ba3ee",
        "1470229722919-5c2759d8dba0",
        "1519681393786-d1557827b65f",
        "1498050108023-c5249f4df085",
    ],
    "user-experience-design": [
        "1586717791821-8c17c4a41da9",
        "1561070790-a38673ff345e",
        "1609921212029-a4529ce7c80f",
        "1454165804606-c3d57bc86b40",
        "1558658170-ec87d21d5746",
    ],
    "graphic-design": [
        "1626785774573-e2cc18dd8e41",
        "1572044162444-8f27acba5290",
        "1561070790-a38673ff345e",
        "1524758870432-afd8e9476dbc",
        "1618005182384-a8243f9c11da",
    ],
    "logo-design": [
        "1626785774573-e2cc18dd8e41",
        "1634947593041-99da48d81972",
        "1497366216548-37526070297c",
        "1572044162444-8f27acba5290",
        "1561070790-a38673ff345e",
    ],
    "banner-design": [
        "1563986768609-322da13575f3",
        "1553729459-efe14ef6055d",
        "1460925895917-afdab827c52f",
        "1558658170-ec87d21d5746",
        "1572044162444-8f27acba5290",
    ],
    "brochure-design": [
        "1544812134-8ce85f61826a",
        "1586281380117-5e4d11571660",
        "1454165804606-c3d57bc86b40",
        "1497366216548-37526070297c",
        "1626785774573-e2cc18dd8e41",
    ],
    "digital-marketing": [
        "1460925895917-afdab827c52f",
        "1553729459-efe14ef6055d",
        "1551288049-bebda4e38f71",
        "1432888498266-38ffec3acd67",
        "1553877522-43269d4ea984",
    ],
    "seo-(search-engine-optimization)": [
        "1460925895917-afdab827c52f",
        "1551288049-bebda4e38f71",
        "1432888498266-38ffec3acd67",
        "1553729459-efe14ef6055d",
        "1504868584819-f8e8b4b6d7c4",
    ],
    "smo-(social-media-optimization)": [
        "1611162616305-a69b973bb5b2",
        "1611162618071-b39a2ec055fb",
        "1579869847514-7c1b19ab2d04",
        "1432888498266-38ffec3acd67",
        "1553877522-43269d4ea984",
    ],
    "smm-(social-media-marketing)": [
        "1611162618071-b39a2ec055fb",
        "1611162616305-a69b973bb5b2",
        "1579869847514-7c1b19ab2d04",
        "1563986768609-322da13575f3",
        "1553877522-43269d4ea984",
    ],
    "ppc-(pay-per-click)": [
        "1553729459-efe14ef6055d",
        "1460925895917-afdab827c52f",
        "1563986768609-322da13575f3",
        "1551288049-bebda4e38f71",
        "1432888498266-38ffec3acd67",
    ],
}

FALLBACK = [
    "1498050108023-c5249f4df085",
    "1486312338219-ce68d2c6f44d",
    "1461749280684-dccba630e2f6",
    "1512941937669-90a1b58e7e9c",
    "1460925895917-afdab827c52f",
]


def unsplash(photo_id: str, width: int = 1600) -> str:
    return (
        f"https://images.unsplash.com/photo-{photo_id}"
        f"?auto=format&fit=crop&w={width}&q=80"
    )


def download(url: str, dest: Path) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 WebAstral/2.0"})
    with urllib.request.urlopen(req, context=CTX, timeout=40) as res:
        data = res.read()
    if len(data) < 8000:
        raise RuntimeError(f"tiny {len(data)} {url}")
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)


def fetch_one(photo_id: str, dest: Path) -> None:
    last: Exception | None = None
    for pid in (photo_id, *FALLBACK):
        try:
            download(unsplash(pid), dest)
            return
        except Exception as err:  # noqa: BLE001
            last = err
            time.sleep(0.2)
    raise RuntimeError(f"{dest}: {last}")


def main() -> None:
    for slug, ids in PHOTOS.items():
        folder = SERVICES / slug
        folder.mkdir(parents=True, exist_ok=True)
        for slot, photo_id in zip(SLOTS, ids):
            dest = folder / slot
            fetch_one(photo_id, dest)
            print(f"ok {slug} {slot}", flush=True)
    print("done", flush=True)


if __name__ == "__main__":
    main()
