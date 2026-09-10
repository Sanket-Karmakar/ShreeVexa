import urllib.request
import urllib.parse
import json
import os
import time
import ssl

brands = [
    "Samsung", "LG", "Intel", "Epson", "Canon", "Brother", 
    "Western Digital", "Seagate", "SanDisk", "Kingston", 
    "Honeywell", "Zebra", "Hikvision", "APC", "Dahua"
]

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def get_wikimedia_url(brand):
    search_query = urllib.parse.quote(f"{brand} logo svg")
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={search_query}&utf8=&format=json&srnamespace=6"
    req = urllib.request.Request(url, headers={'User-Agent': 'Bot ShreeVexa/1.0'})
    try:
        with urllib.request.urlopen(req, context=ctx) as response:
            data = json.loads(response.read().decode())
            if not data['query']['search']: return None
            
            # Get the first file title
            title = data['query']['search'][0]['title']
            title_encoded = urllib.parse.quote(title)
            
            # Get imageinfo for url
            info_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={title_encoded}&prop=imageinfo&iiprop=url&format=json"
            info_req = urllib.request.Request(info_url, headers={'User-Agent': 'Bot ShreeVexa/1.0'})
            with urllib.request.urlopen(info_req, context=ctx) as info_response:
                info_data = json.loads(info_response.read().decode())
                pages = info_data['query']['pages']
                for page_id in pages:
                    if 'imageinfo' in pages[page_id]:
                        return pages[page_id]['imageinfo'][0]['url']
    except Exception as e:
        print(f"Error fetching metadata for {brand}: {e}")
    return None

for brand in brands:
    print(f"Searching for {brand}...")
    url = get_wikimedia_url(brand)
    if url:
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, context=ctx) as response:
                with open(f"public/brands/{brand.replace(' ', '')}.svg", 'wb') as f:
                    f.write(response.read())
            print(f"Downloaded {brand}")
        except Exception as e:
            print(f"Failed to download {brand} from {url}: {e}")
    else:
        print(f"No SVG found for {brand}")
    time.sleep(1) # avoid rate limits
