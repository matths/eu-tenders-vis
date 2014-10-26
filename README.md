Follow the money
==============

A tool for citizens and especially journalists to facilitate insights and transparency of public procurement processes in the European Union. Based on the recent open data from TED (http://ted.openspending.org/, http://ted.europa.eu/). Follow the money ... spent on tenders

Platform:
Web-based data visualization.

MPV:
Map interface based on open data with interactive visualizations.

Target Group:
The tool can be a valuable source for citizens, journalists, NGOs and analysts alike. Especially investigative journalists have already shown an interest in the project. Government officials will also get a richer overview on their spending as well as their peers.

How to use
It's simple ONE-TWO-THREE:
1 Go to The online Version or get the code from github.com/matths/eu-tenders-vis
2 Combine it with any german csv-data downloaded from Open Spending via the upload field right on the top.
3 Search, Analyze, Find - It's up to you!

Used case #1:
Mr. Smith is a journalist, based in Munich.

For a story he is working on, he is interested in knowing more about how Bavarian public expenditure looks like. In particular, he is interested in finding out about the expenses of the Bavarian State in the area of energy. His focus is on larger projects, where contracts above €5 million have been awarded within the past year to contractors.

To find the information he needs, he toggles the map to “destination” and uses the map to find his point of departure (Bayern). He then uses the filtering option to toggle his preferred options:

Industry: Energy
Volume: + €5 million
Time: 2014.

The lines on the map will instantly show him where contracts have gone to geographically, corresponding to his chosen search criteria. By hovering across the individual lines, he will find detailed information on the individual awarded contracts. For in-depth information he can follow a link to the original document.

Used case #2:
Mrs. Jones is an analyst in Berlin, Germany.

She is interested in knowing how small businesses in the berlin technology industry are benefiting from international public procurement offers within the last year.

To find out, she chooses Berlin as her focus point, and toggles the view option to “destination”. She then sets her parameters to narrow down the information she is looking for:

Industry: Technology 
Volume: less than € 1 million 
Time: 2014

The lines on the map will now show the influx of contracts to Berlin from various destinations, corresponding to her chosen search criteria. By hovering across the individual lines, she will find detailed information on the individual awarded contracts. For in-depth information he can follow a link to the original document.

Challenges & Solutions:
Amount of data: The current solution processes reliably more than 1,5 Million Datapoints in more than 10.000 records of tender data at a time. We tested it successfully with 10 times more data, but it needs longer to load than we have to present at the hackathon. It can easily be modified to display different data for various needs.

Accountability / Transparency: We chose an approach to run everything in the browser so that you can check the data on your own system and verify that we don't omit or hide anything. Given the amount of distrust in transparency in the eu by the public, this is a significant cornerstone for users to take results seriously.

Complexity Reduction: The data itself is with far over hundred columns and each might have omissions, errors and data specific codes that are not easy to handle. We carefully curated the most important data points and have them available for instant overview.

Resist to over-visualize: It is a serious tool with real impact for the EU-public when released. So we decided to be calm about the presentation and representation of the data so that users make up their own mind about public spending in the european tenders.

Custom geo coding needed: Instead of paying more than 500 Euros for centroid geo information for postal areas we geocoded them ourselves from open data. We will release this useful dataset as a bonus to our project, helping future map-visualizations of postal code reliant data for other projects.

Scalability:
This tool and its code can be used in the future by the European people to access their national data, as well as Europe-wide data. It can be extended to work from static information to working with a live database, thus exceeding current tools made available by the EU. It as such has the potential to be a disruptive element to the current information market in this area. It has the potential to be a reference point for future tools in that data-area since it is the first to be published.

Technology:
Javascript / J-Query
HTML 5 / CSS

Link: 
[The project runs local and works with data from ted.openspending.org. A documentation will be released explaining how to customize it within a days work to use the data of european countries. ]

Source code:
github.com/matths/eu-tenders-vis

Outlook:
Since the liberation of the underlying data in May, no-one so far has delivered what we accomplished: A working tool to access the data-dump visually and with intelligent curation. Its a big leap in this area.

This result of this project is eagerly expected by colleagues at newspapers, radio and tv in Germany: Süddeutsche Zeitung, DIE ZEIT and ZDF to name a few explicitly. We believe that journalists at magazines like Focus, Stern or Spiegel will make use of it, too and find stories to report on.

In 2015 the then version will presented at the dataharvest in brussels, belgium - the biggest european data journalism meetup in the public sector. Additionally we have a realistic chance to introduce it on NICAR15, the US&Global data journalism conference in Atlanta next year.

Team:
David Barnwell (Journalist): david@barnwell.dk / @davidbarnwell / +49 176 31507487 
Mac Krebernik (Design): mac@krebernik.eu / @krebernik / github: krebernik / +43 699 81202014
Matthias Dittgen (Coder): dittgen@gmail.com / @matths / github: matths / +49 176 420 566 57
Paul (Coder): paul.sonnentag@gamil.com / github: BrackCurly
Sebastian Mondial (Journalist): sebastian.mondial@h2h.de / @kappuchino / +49 176 34489103
One student.
