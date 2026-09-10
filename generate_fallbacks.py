import os

logos = {
    "Samsung": ("#1428A0", "SAMSUNG"),
    "Epson": ("#003399", "EPSON"),
    "APC": ("#DF0000", "APC"),
    "Brother": ("#0000FF", "brother"),
    "Hikvision": ("#D31245", "HIKVISION"),
    "Dahua": ("#E51937", "alhua"),
    "Honeywell": ("#FF0000", "Honeywell"),
    "Zebra": ("#000000", "ZEBRA"),
    "WesternDigital": ("#00559F", "Western Digital"),
    "Kingston": ("#ED1C24", "Kingston"),
    "SanDisk": ("#ED1C24", "SanDisk")
}

svg_template = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150">
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="80" fill="{color}">{name}</text>
</svg>"""

os.makedirs("public/brands", exist_ok=True)

for key, (color, name) in logos.items():
    filename = f"public/brands/{key}.svg"
    with open(filename, 'w') as f:
        f.write(svg_template.format(color=color, name=name))
    print(f"Generated {filename}")
