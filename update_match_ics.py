import datetime
# from ics import Calendar, Event
from icalendar import Calendar, Event, vCalAddress, vText
import requests
import pytz

url = "http://www.kz-zaanstreek.net/API/CompetitionMatchSchedule/Team/5390"

response = requests.get(url)

if response.ok:
    data = response.json()

    cal = Calendar()
    cal.add('prodid', '-//FC Zaanstreek 8 Wedstrijden//example.com//')
    cal.add('version', '1.0')
    organizer = vCalAddress('Kz Zaanstreek')
    # cal.creator = "FC Zaanstreek 8"
    for match in data:
        
        

        name = f"{match['hometeam']} V {match['awayteam']}"
        location = match["location"]
        beginDate = datetime.datetime.strptime(f"{match['date']} {match['time']}", "%d-%m-%Y %H:%M uur")
        endDate = beginDate + datetime.timedelta(hours=1)
        description = f"Scheids: {match['referee']}"
        event = Event()
        event.add('name', name)
        event.add('summary', name)
        event.add('dtstart', beginDate)
        event.add('dtend', endDate)
        event.add('location', location)
        event.add('description', description)
        event.add('organizer', organizer)

        # event = Event(name, beginDate, endDate, description=description, location=location)
        cal.add_component(event)
    
    # breakpoint()
    with open("public/matchSchedule.ics", "wb") as f:
        # f.write(cal.serialize().replace("\r\n", "\n"))
        f.write(cal.to_ical())
