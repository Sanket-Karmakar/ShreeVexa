import urllib.request
import os

logos = {
    "Dell": "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
    "HP": "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
    "Lenovo": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg",
    "ASUS": "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg",
    "Acer": "https://upload.wikimedia.org/wikipedia/commons/0/00/Acer_2011.svg",
    "Apple": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "Logitech": "https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg",
    "Microsoft": "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    "Google": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "Cisco": "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
    "Samsung": "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    "LG": "https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg",
    "Intel": "https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2022.svg",
    "AMD": "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg",
    "NVIDIA": "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    "Epson": "https://upload.wikimedia.org/wikipedia/commons/4/41/Epson_logo.svg",
    "Canon": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Canon_logo.svg",
    "Brother": "https://upload.wikimedia.org/wikipedia/commons/6/67/Brother_logo.svg",
    "WesternDigital": "https://upload.wikimedia.org/wikipedia/commons/7/77/Western_Digital_logo.svg",
    "Seagate": "https://upload.wikimedia.org/wikipedia/commons/4/43/Seagate_logo.svg",
    "SanDisk": "https://upload.wikimedia.org/wikipedia/commons/4/4c/SanDisk_Logo.svg",
    "Kingston": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Kingston_Technology_logo.svg",
    "Honeywell": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Honeywell_logo.svg",
    "Zebra": "https://upload.wikimedia.org/wikipedia/commons/1/16/Zebra_Technologies_logo.svg",
    "Hikvision": "https://upload.wikimedia.org/wikipedia/commons/0/01/Hikvision_logo.svg",
    "APC": "https://upload.wikimedia.org/wikipedia/commons/6/62/APC_by_Schneider_Electric_logo.svg",
    "Dahua": "https://upload.wikimedia.org/wikipedia/commons/5/52/Dahua_Technology_logo.svg"
}

os.makedirs("public/brands", exist_ok=True)
import ssl
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

for name, url in logos.items():
    filename = f"public/brands/{name}.svg"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as response:
            with open(filename, 'wb') as f:
                f.write(response.read())
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed {name}: {e}")
