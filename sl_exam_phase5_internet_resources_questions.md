# SL Exam Phase 5 Question Bank — Internet Resources (Lecture 09)

Source: `SL_W04IST_SI4034_lecture_09-internet.pdf`

Question count: **107**

> All questions are single-choice and use Python semantics.

## P5-Q001 — HTTP protocol

What does HTTP stand for?

A. Hypertext Transfer Protocol
B. High Transfer Python
C. Host Text Python
D. Hyperlink Terminal Process

**Correct answer:** A — Hypertext Transfer Protocol

**Explanation:** HTTP means Hypertext Transfer Protocol.

## P5-Q002 — HTTP protocol

HTTP is a stateless client-server protocol used to transfer data on the web.

A. True
B. False

**Correct answer:** A — True

**Explanation:** Each HTTP request is independent and the server does not automatically remember prior requests.

## P5-Q003 — HTTP protocol

In the HTTP request-response cycle, the server sends a request and the client returns a response.

A. True
B. False

**Correct answer:** B — False

**Explanation:** The client sends the request; the server returns the response.

## P5-Q004 — HTTP protocol

In HTTP, stateless means that every request is independent.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The server treats each request separately unless extra mechanisms such as sessions or tokens are used.

## P5-Q005 — HTTP protocol

Which HTTP version is described in the lecture as text-based?

A. HTTP/1.1
B. HTTP/2
C. HTTP/3
D. SMTP

**Correct answer:** A — HTTP/1.1

**Explanation:** The lecture notes HTTP/1.1 as text-based, while HTTP/2 and HTTP/3 use binary framing.

## P5-Q006 — HTTP protocol

HTTP/2 and HTTP/3 use binary framing according to the lecture.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The slides distinguish HTTP/1.1 as text-based and HTTP/2/3 as binary framed.

## P5-Q007 — HTTP request types

Which HTTP method is normally used to retrieve data?

A. GET
B. POST
C. PUT only
D. DELETE only

**Correct answer:** A — GET

**Explanation:** GET retrieves data.

## P5-Q008 — HTTP request types

Which HTTP method is described as not idempotent because it may create a resource each time?

A. GET
B. POST
C. HEAD
D. OPTIONS

**Correct answer:** B — POST

**Explanation:** POST submits data and can create a new resource on each call.

## P5-Q009 — HTTP request types

GET arguments are commonly encoded in the URL query string.

A. True
B. False

**Correct answer:** A — True

**Explanation:** Example: /users?name=Tom.

## P5-Q010 — HTTP request types

POST arguments are commonly sent in the request body.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture shows name and password in the POST body.

## P5-Q011 — HTTP request types

A GET request should normally be safe to repeat because it is idempotent.

A. True
B. False

**Correct answer:** A — True

**Explanation:** GET is described as idempotent, safe to repeat.

## P5-Q012 — HTTP request types

A POST request is always safe to repeat because it never changes server state.

A. True
B. False

**Correct answer:** B — False

**Explanation:** POST may create resources or change state, so repeating it can have effects.

## P5-Q013 — HTTP status codes

A web server receives a request for a page that does not exist. Which status code is expected?

A. 200 OK
B. 401 Authentication required
C. 404 Not Found
D. 500 Server-side error

**Correct answer:** C — 404 Not Found

**Explanation:** 404 Not Found means the requested resource does not exist.

## P5-Q014 — HTTP status codes

Which status code family causes requests.raise_for_status() to raise an HTTPError?

A. 1xx and 2xx
B. 2xx only
C. 3xx only
D. 4xx and 5xx

**Correct answer:** D — 4xx and 5xx

**Explanation:** raise_for_status() raises for client and server errors: 4xx and 5xx.

## P5-Q015 — HTTP status codes

Which status code means success in the lecture examples?

A. 200 OK
B. 404 Not Found
C. 500 Server-side error
D. 401 Authentication required

**Correct answer:** A — 200 OK

**Explanation:** 200 OK represents a successful response.

## P5-Q016 — HTTP status codes

Which status code is associated with authentication required?

A. 200
B. 401
C. 404
D. 500

**Correct answer:** B — 401

**Explanation:** 401 means authentication is required.

## P5-Q017 — HTTP status codes

Which status code represents a server-side error?

A. 200
B. 401
C. 404
D. 500

**Correct answer:** D — 500

**Explanation:** 500 is a server-side error.

## P5-Q018 — requests library

Which command installs the requests library?

A. pip install requests
B. pip run requests
C. python install http
D. pip install bs4 only

**Correct answer:** A — pip install requests

**Explanation:** The lecture uses pip install requests.

## P5-Q019 — requests library

Which Python call sends a GET request with URL parameters?

A. requests.get(url, params={'name':'Tom'})
B. requests.post(url, stream=False)
C. requests.json(url)
D. bs4.BeautifulSoup(url)

**Correct answer:** A — requests.get(url, params={'name':'Tom'})

**Explanation:** The params argument is used by requests.get to encode query parameters.

## P5-Q020 — requests library

Which Python call sends a POST request with form data in the request body?

A. requests.post(url, data={'name':'Tom'})
B. requests.get(url, params=None)
C. r.raise_for_status(data)
D. content.select('form')

**Correct answer:** A — requests.post(url, data={'name':'Tom'})

**Explanation:** requests.post(..., data=...) sends data in the request body.

## P5-Q021 — requests library

The requests library provides functions such as get(), post(), put(), and delete().

A. True
B. False

**Correct answer:** A — True

**Explanation:** These HTTP method helpers are listed in the lecture.

## P5-Q022 — requests response content

In requests, which attribute gives decoded text content?

A. r.text
B. r.content
C. r.status_code
D. r.headers only

**Correct answer:** A — r.text

**Explanation:** r.text is decoded text.

## P5-Q023 — requests response content

In requests, which attribute gives raw bytes?

A. r.text
B. r.content
C. r.json
D. r.params

**Correct answer:** B — r.content

**Explanation:** r.content returns bytes, useful for binary files.

## P5-Q024 — requests response content

Which method parses a JSON response body directly into a Python object?

A. r.json()
B. r.text()
C. r.content()
D. r.headers()

**Correct answer:** A — r.json()

**Explanation:** r.json() parses JSON into Python lists/dicts/etc.

## P5-Q025 — requests response content

r.text is appropriate for HTML or plain text, while r.content is appropriate for binary data such as images or PDFs.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture separates decoded text from raw bytes.

## P5-Q026 — requests response content

r.headers can be used to inspect the Content-Type header.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture uses r.headers["Content-Type"].

## P5-Q027 — requests exceptions

Which requests method should be called to raise an exception for bad HTTP status codes?

A. r.raise_for_status()
B. r.status_code()
C. r.content.raise()
D. requests.check()

**Correct answer:** A — r.raise_for_status()

**Explanation:** raise_for_status() raises on 4xx/5xx responses.

## P5-Q028 — requests exceptions

Which exception indicates that the server did not respond in time?

A. Timeout
B. ConnectionError
C. HTTPError
D. SyntaxError

**Correct answer:** A — Timeout

**Explanation:** Timeout is the requests exception for no timely response.

## P5-Q029 — requests exceptions

Which exception indicates a network-level failure?

A. ConnectionError
B. ValueError
C. IndexError
D. AssertionError

**Correct answer:** A — ConnectionError

**Explanation:** requests.ConnectionError represents network-level failures.

## P5-Q030 — requests exceptions

Which exception indicates a bad HTTP status code after raise_for_status()?

A. HTTPError
B. Timeout
C. ConnectionError
D. TypeError

**Correct answer:** A — HTTPError

**Explanation:** HTTPError is raised for bad 4xx/5xx status codes.

## P5-Q031 — requests exceptions

HTTPError, Timeout, and ConnectionError all inherit from RequestException.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture says these request exceptions inherit from RequestException.

## P5-Q032 — Large downloads

When downloading a large file with requests, what is the purpose of stream=True?

A. Fetch in chunks instead of loading all content into memory
B. Convert bytes into HTML
C. Force JSON parsing
D. Ignore HTTP errors

**Correct answer:** A — Fetch in chunks instead of loading all content into memory

**Explanation:** stream=True allows chunked download.

## P5-Q033 — Large downloads

Which file mode is appropriate for writing downloaded binary content?

A. wb
B. w
C. rt
D. a+

**Correct answer:** A — wb

**Explanation:** Binary write mode avoids text-encoding errors.

## P5-Q034 — Large downloads

Which requests method is used to iterate over downloaded chunks?

A. r.iter_content(chunk_size=...)
B. r.json()
C. r.select()
D. r.write()

**Correct answer:** A — r.iter_content(chunk_size=...)

**Explanation:** iter_content() yields chunks for streaming downloads.

## P5-Q035 — Large downloads

For binary downloads, using text mode can create encoding-related problems.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture recommends wb for binary writes.

## P5-Q036 — HTML basics

What does HTML stand for?

A. Hypertext Markup Language
B. Hyper Transfer Mail Language
C. High Type Machine Language
D. Host Text Module Logic

**Correct answer:** A — Hypertext Markup Language

**Explanation:** HTML is Hypertext Markup Language.

## P5-Q037 — HTML basics

HTML is a markup language that combines content with structural tags.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture defines HTML as markup with content and tags.

## P5-Q038 — HTML basics

Which technology is mainly responsible for visual presentation and is kept separate from HTML semantics?

A. CSS
B. SMTP
C. JSON
D. sqlite3

**Correct answer:** A — CSS

**Explanation:** CSS handles visual style/presentation.

## P5-Q039 — HTML basics

HTML semantics refers to meaning represented by tags.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture contrasts semantics with presentation.

## P5-Q040 — DOM

What is the DOM?

A. A tree representation of an HTML page
B. A Python package manager
C. An SMTP server
D. A CSV dialect

**Correct answer:** A — A tree representation of an HTML page

**Explanation:** DOM stands for Document Object Model, a tree representation of the page.

## P5-Q041 — DOM

Programs can navigate and modify the DOM tree.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture defines DOM as a tree that programs can navigate and modify.

## P5-Q042 — BeautifulSoup

Why does the lecture recommend BeautifulSoup instead of manual HTML parsing?

A. Manual HTML parsing is error-prone
B. BeautifulSoup sends email
C. BeautifulSoup opens SQLite databases
D. Manual parsing is impossible in Python

**Correct answer:** A — Manual HTML parsing is error-prone

**Explanation:** BeautifulSoup builds a DOM object from raw HTML and avoids fragile manual parsing.

## P5-Q043 — BeautifulSoup

Which package does the lecture install for BeautifulSoup?

A. bs4
B. requests-html-only
C. smtp4
D. jsonapi

**Correct answer:** A — bs4

**Explanation:** The installation command is pip install bs4.

## P5-Q044 — BeautifulSoup

Which parser name is used in the lecture example?

A. html.parser
B. json.parser
C. csv.reader
D. smtp.parser

**Correct answer:** A — html.parser

**Explanation:** The example uses bs4.BeautifulSoup(page.text, "html.parser").

## P5-Q045 — BeautifulSoup

BeautifulSoup can use the built-in html.parser and also faster parsers such as lxml.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture lists html.parser and lxml.

## P5-Q046 — BeautifulSoup

In the lecture example, what should be called before parsing the downloaded page?

A. page.raise_for_status()
B. page.sendmail()
C. page.crop()
D. page.commit()

**Correct answer:** A — page.raise_for_status()

**Explanation:** The example checks the HTTP response before building the soup.

## P5-Q047 — BeautifulSoup

What does content.select("p") return?

A. A list of matching elements
B. A single string only
C. A network response
D. A CSV row

**Correct answer:** A — A list of matching elements

**Explanation:** BeautifulSoup select() returns a list.

## P5-Q048 — CSS selectors

Which CSS selector matches all div elements?

A. div
B. #div
C. .div
D. div > #

**Correct answer:** A — div

**Explanation:** The selector div matches all <div> elements.

## P5-Q049 — CSS selectors

Which CSS selector matches the element with id="content"?

A. #content
B. .content
C. content
D. div content only

**Correct answer:** A — #content

**Explanation:** #content selects an element by id.

## P5-Q050 — CSS selectors

Which CSS selector matches elements with class topheader?

A. .topheader
B. #topheader
C. topheader
D. div#

**Correct answer:** A — .topheader

**Explanation:** .topheader selects by class.

## P5-Q051 — CSS selectors

What does the CSS selector div span mean?

A. A span anywhere inside a div
B. A span directly inside body only
C. A div with id span
D. All div and all span elements separately

**Correct answer:** A — A span anywhere inside a div

**Explanation:** A space means descendant selector.

## P5-Q052 — CSS selectors

What does the CSS selector div > span mean?

A. A span directly inside a div
B. A span anywhere in the document
C. A div directly inside a span
D. A div with class span

**Correct answer:** A — A span directly inside a div

**Explanation:** > means direct child.

## P5-Q053 — Extracting HTML data

Given an <a> element, which method extracts its visible text?

A. el.get_text()
B. el.get("href")
C. el.raise_for_status()
D. el.json()

**Correct answer:** A — el.get_text()

**Explanation:** get_text() extracts the element text.

## P5-Q054 — Extracting HTML data

Given an <a> element, which method gets the href attribute?

A. el.get("href")
B. el.get_text()
C. el.content
D. el.status_code

**Correct answer:** A — el.get("href")

**Explanation:** get("href") retrieves the href attribute value.

## P5-Q055 — Extracting HTML data

content.head and content.title are examples of direct attribute access on a BeautifulSoup object.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture lists content.head and content.title.

## P5-Q056 — Web scraping caveats

Which risk is mentioned for web scraping?

A. The page structure can change without notice
B. Python cannot write CSV files
C. GET cannot retrieve HTML
D. BeautifulSoup cannot parse any HTML

**Correct answer:** A — The page structure can change without notice

**Explanation:** HTML structure changes can break selectors.

## P5-Q057 — Web scraping caveats

What should you check before scraping a website?

A. robots.txt and the site terms of service
B. The SMTP port only
C. The SQLite rowid only
D. The Python shebang only

**Correct answer:** A — robots.txt and the site terms of service

**Explanation:** The lecture says to check robots.txt and the site terms.

## P5-Q058 — Web scraping caveats

Many sites actively block scraping.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture mentions sites such as Google and LinkedIn as examples.

## P5-Q059 — Web scraping caveats

Poor semantic HTML can make reliable selection harder.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture lists this as a scraping caveat.

## P5-Q060 — Web API

What does API stand for?

A. Application Programming Interface
B. Automatic Python Import
C. Application Parsing Internet
D. Advanced Protocol Iterator

**Correct answer:** A — Application Programming Interface

**Explanation:** API means Application Programming Interface.

## P5-Q061 — Web API

A web API is a defined interface that lets software systems exchange data and trigger actions.

A. True
B. False

**Correct answer:** A — True

**Explanation:** This is the lecture definition.

## P5-Q062 — REST API

What kind of data do REST APIs often return according to the lecture?

A. Structured data such as JSON
B. Only raw images
C. Only DOCX files
D. Only Python source code

**Correct answer:** A — Structured data such as JSON

**Explanation:** REST APIs usually return structured data, typically JSON.

## P5-Q063 — REST API

A REST API response is normally parsed with BeautifulSoup because it is HTML.

A. True
B. False

**Correct answer:** B — False

**Explanation:** APIs return structured data such as JSON; HTML parsing is for web pages.

## P5-Q064 — REST CRUD

Which HTTP method maps to Create in the lecture CRUD table?

A. POST
B. GET
C. PUT
D. DELETE

**Correct answer:** A — POST

**Explanation:** POST is used to create.

## P5-Q065 — REST CRUD

Which HTTP method maps to Read in the lecture CRUD table?

A. GET
B. POST
C. PUT
D. DELETE

**Correct answer:** A — GET

**Explanation:** GET is used to read data.

## P5-Q066 — REST CRUD

Which HTTP method maps to Update in the lecture CRUD table?

A. PUT
B. GET
C. POST
D. DELETE

**Correct answer:** A — PUT

**Explanation:** PUT is used to update.

## P5-Q067 — REST CRUD

Which HTTP method maps to Delete in the lecture CRUD table?

A. DELETE
B. GET
C. POST
D. PUT

**Correct answer:** A — DELETE

**Explanation:** DELETE is used to remove data.

## P5-Q068 — REST URL design

In REST URL design, what does GET /students usually mean?

A. Get all students
B. Delete all students
C. Create one student
D. Send email to students

**Correct answer:** A — Get all students

**Explanation:** The lecture example uses GET /students for all students.

## P5-Q069 — REST URL design

In REST URL design, what does GET /students/34 usually mean?

A. Get the student with ID 34
B. Create student 34
C. Delete all students except 34
D. Change the server port to 34

**Correct answer:** A — Get the student with ID 34

**Explanation:** The URL identifies the specific resource by ID.

## P5-Q070 — REST URL design

In REST URL design, what does DELETE /students/34 usually mean?

A. Delete student 34
B. Create student 34
C. Get all students
D. Parse JSON

**Correct answer:** A — Delete student 34

**Explanation:** DELETE on the resource URL removes that resource.

## P5-Q071 — Passing data to API

When sending JSON to an API, which HTTP header identifies the body type?

A. Content-Type: application/json
B. Accept-Language: Python
C. Authorization: html.parser
D. Content-Length: BeautifulSoup

**Correct answer:** A — Content-Type: application/json

**Explanation:** Content-Type: application/json says the body is JSON.

## P5-Q072 — Passing data to API

The response from an API can also be JSON and can be parsed with r.json().

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture says to use r.json() to parse JSON responses.

## P5-Q073 — API authentication

Why do APIs often require authentication?

A. To prove identity and prevent abuse
B. To make HTML parsing faster
C. To convert CSS to JSON
D. To force use of port 25

**Correct answer:** A — To prove identity and prevent abuse

**Explanation:** Authentication proves identity and helps prevent abuse.

## P5-Q074 — API authentication

Which authentication method is described as issued per user/application and can be scoped?

A. Access token
B. HTML title
C. CSV dialect
D. DOM selector

**Correct answer:** A — Access token

**Explanation:** Access tokens can be issued per user/application and scoped.

## P5-Q075 — API authentication

Where is the API token passed in the lecture example?

A. In the Authorization HTTP header
B. Inside a CSV field
C. In an SMTP body only
D. In the BeautifulSoup parser name

**Correct answer:** A — In the Authorization HTTP header

**Explanation:** The example passes Authorization: token ... in headers.

## P5-Q076 — API authentication

In the GitHub Issues example, what type is issues after issues = r.json()?

A. A list of issue dictionaries
B. A string containing raw HTML only
C. An SMTP object
D. A file handle

**Correct answer:** A — A list of issue dictionaries

**Explanation:** The lecture notes issues is a list of issue dicts.

## P5-Q077 — API authentication

In requests.get(url, headers={...}, params={"state":"open"}), where does params go?

A. Into the URL query string
B. Into the SMTP password
C. Into the HTML DOM directly
D. Into a local SQLite table automatically

**Correct answer:** A — Into the URL query string

**Explanation:** params are encoded as URL query parameters.

## P5-Q078 — Email and SMTP

What does SMTP stand for?

A. Simple Mail Transfer Protocol
B. Structured Markup Text Parser
C. Server Message Testing Python
D. Simple Method Transfer Program

**Correct answer:** A — Simple Mail Transfer Protocol

**Explanation:** SMTP means Simple Mail Transfer Protocol.

## P5-Q079 — Email and SMTP

SMTP is used to send email.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture states SMTP is used to send mail.

## P5-Q080 — Email and SMTP

Almost all email servers today require authentication for sending mail programmatically.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture explicitly says almost all servers require authentication today.

## P5-Q081 — Email and SMTP

Which port is associated with STARTTLS explicit TLS in the lecture?

A. 587
B. 465
C. 25
D. 80

**Correct answer:** A — 587

**Explanation:** Port 587 is STARTTLS explicit TLS.

## P5-Q082 — Email and SMTP

Which port is associated with implicit TLS / SSL in the lecture?

A. 465
B. 587
C. 25
D. 443 only

**Correct answer:** A — 465

**Explanation:** Port 465 is implicit TLS (SSL).

## P5-Q083 — Email and SMTP

Which SMTP port is described as plaintext and should be avoided?

A. 25
B. 465
C. 587
D. 443

**Correct answer:** A — 25

**Explanation:** Port 25 is plaintext in the lecture table and should be avoided.

## P5-Q084 — Google App Password

For Google programmatic email access, what does the lecture say is required?

A. An App Password
B. A BeautifulSoup parser
C. A CSV Sniffer
D. A SQLite row factory

**Correct answer:** A — An App Password

**Explanation:** Google requires an App Password for programmatic access.

## P5-Q085 — Google App Password

A Google App Password is more secure than sharing your real password with the script.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture says it is more secure than sharing your real password.

## P5-Q086 — Google App Password

Two-factor authentication must be enabled before creating a Google App Password.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture states this requirement.

## P5-Q087 — smtplib connection

Which module is used to send email in the lecture?

A. smtplib
B. bs4
C. sqlite3
D. openpyxl

**Correct answer:** A — smtplib

**Explanation:** The lecture uses smtplib.

## P5-Q088 — smtplib connection

Which class is used for STARTTLS on port 587 in the lecture?

A. smtplib.SMTP
B. smtplib.SMTP_SSL
C. requests.get
D. BeautifulSoup

**Correct answer:** A — smtplib.SMTP

**Explanation:** STARTTLS begins with smtplib.SMTP on port 587, then starttls().

## P5-Q089 — smtplib connection

Which method starts TLS after connecting with smtplib.SMTP on port 587?

A. smtp.starttls()
B. smtp.sendmail()
C. smtp.json()
D. smtp.select()

**Correct answer:** A — smtp.starttls()

**Explanation:** smtp.starttls() upgrades the connection to TLS.

## P5-Q090 — smtplib connection

Which class is used for implicit TLS on port 465?

A. smtplib.SMTP_SSL
B. smtplib.SMTP
C. requests.post
D. csv.writer

**Correct answer:** A — smtplib.SMTP_SSL

**Explanation:** SMTP_SSL is used for implicit TLS.

## P5-Q091 — smtplib connection

The lecture examples call smtp.ehlo() after connecting.

A. True
B. False

**Correct answer:** A — True

**Explanation:** Both SMTP and SMTP_SSL examples call ehlo().

## P5-Q092 — Email credentials

What should you avoid when logging into SMTP from Python?

A. Hard-coding credentials in source code
B. Using an environment variable
C. Using getpass.getpass()
D. Using a config file ignored by version control

**Correct answer:** A — Hard-coding credentials in source code

**Explanation:** The lecture says never hard-code credentials.

## P5-Q093 — Email credentials

Which is a safe alternative for storing the SMTP password according to the lecture?

A. os.environ["SMTP_PASS"]
B. A literal password in the .py file
C. The subject header
D. The href attribute

**Correct answer:** A — os.environ["SMTP_PASS"]

**Explanation:** The example logs in using os.environ["SMTP_PASS"].

## P5-Q094 — Email credentials

Which module/function can prompt for a password at runtime?

A. getpass.getpass()
B. bs4.getpass()
C. requests.password()
D. smtp.json()

**Correct answer:** A — getpass.getpass()

**Explanation:** getpass.getpass() is named as a safe alternative.

## P5-Q095 — Email message format

Which headers are required in the lecture message example?

A. From, To, Subject
B. Only Content-Type
C. Only Authorization
D. Host, Cookie, Accept

**Correct answer:** A — From, To, Subject

**Explanation:** The message example includes required From, To, and Subject headers.

## P5-Q096 — Email message format

In a raw email message string, headers and body are separated by a blank line.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture explicitly says headers and body are separated by a blank line.

## P5-Q097 — Sending email

Which smtplib method sends the email?

A. smtp.sendmail(sender, recipients, message)
B. smtp.get(url)
C. smtp.raise_for_status()
D. smtp.select("mail")

**Correct answer:** A — smtp.sendmail(sender, recipients, message)

**Explanation:** sendmail sends the message.

## P5-Q098 — Sending email

In smtp.sendmail(sender, recipients, message), what type should recipients be?

A. A list, even for a single address
B. Always one plain string only
C. A BeautifulSoup element
D. A CSV DictReader

**Correct answer:** A — A list, even for a single address

**Explanation:** The lecture says recipients must be a list even for one address.

## P5-Q099 — Sending email

What does smtp.sendmail() return according to the lecture?

A. A dictionary of failed recipients
B. Always True
C. The full sent message
D. A JSON list of delivered messages

**Correct answer:** A — A dictionary of failed recipients

**Explanation:** sendmail returns a dict of failed recipients; empty dict means all delivered.

## P5-Q100 — Sending email

An empty dictionary returned by smtp.sendmail() means all recipients were delivered successfully.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture states empty dict = all delivered.

## P5-Q101 — Sending email

Which method disconnects from the SMTP server in the lecture example?

A. smtp.quit()
B. smtp.close_db()
C. smtp.raise_for_status()
D. smtp.get_text()

**Correct answer:** A — smtp.quit()

**Explanation:** smtp.quit() disconnects from the SMTP server.

## P5-Q102 — Sending email

Mail servers can enforce hourly or daily sending limits.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture warns about sending limits.

## P5-Q103 — Internet script workflow

A Python script downloads a news page, extracts headlines and links, and saves them to CSV. Which module order best matches the lecture approach?

A. requests -> BeautifulSoup/bs4 -> csv
B. smtplib -> sqlite3 -> PIL
C. csv -> SMTP -> requests only
D. BeautifulSoup -> smtp.login -> Decimal

**Correct answer:** A — requests -> BeautifulSoup/bs4 -> csv

**Explanation:** Use requests to download, BeautifulSoup to parse, and csv to save structured rows.

## P5-Q104 — Internet script workflow

If a news site changes its HTML class names, a scraper using old CSS selectors may silently stop finding the right elements.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture warns that HTML structure changes break scraping.

## P5-Q105 — Internet script workflow

Which is the best Python method to get JSON from an API response before saving selected fields?

A. r.json()
B. r.get_text()
C. BeautifulSoup(r.content)
D. smtp.sendmail()

**Correct answer:** A — r.json()

**Explanation:** APIs return JSON; r.json() gives Python objects.

## P5-Q106 — Internet script workflow

For an authenticated API request using requests, where should the access token normally be placed?

A. headers={"Authorization": ...}
B. Inside print() only
C. Inside BeautifulSoup parser argument
D. Inside the file mode "wb"

**Correct answer:** A — headers={"Authorization": ...}

**Explanation:** The lecture example passes the token in the Authorization header.

## P5-Q107 — Internet script workflow

When writing a script that contacts the Internet, checking status codes and handling request exceptions helps avoid silent data errors.

A. True
B. False

**Correct answer:** A — True

**Explanation:** The lecture motivates HTTP knowledge and raise_for_status() to prevent broken scripts.
