import requests

url = "https://rcos-orca.herokuapp.com/202109/courses?include_sections=true&include_periods=false&limit=50&offset="
offset = 0
while(True):
    r = requests.get(url+str(offset))
    offset += 50
    data = r.json()
    if len(data) < 50:
        break
