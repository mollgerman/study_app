# SL Exam Phase 5 Topics — Internet Resources (Lecture 09)

Source: `SL_W04IST_SI4034_lecture_09-internet.pdf`  
Scope: Python-only exam preparation.

## 1. HTTP protocol

- HTTP means **Hypertext Transfer Protocol**.
- It is a **stateless client-server protocol**: the client sends a request and the server returns a response.
- `GET` retrieves data and is idempotent / safe to repeat. Query arguments go in the URL.
- `POST` submits data and is not idempotent. Arguments are usually in the request body.
- Important status codes: `200 OK`, `404 Not Found`, `401 authentication required`, `500 server-side error`.

## 2. Python `requests`

- Install with `pip install requests`.
- Use `requests.get(url, params={...})` for GET with query parameters.
- Use `requests.post(url, data={...})` for POST body data.
- `r.status_code` stores the HTTP status code.
- `r.raise_for_status()` raises on `4xx` / `5xx`.
- Main exceptions: `HTTPError`, `Timeout`, `ConnectionError`; all inherit from `RequestException`.
- `r.text` is decoded text; `r.content` is raw bytes; `r.json()` parses JSON into Python objects.
- For large files use `stream=True`, iterate with `r.iter_content(...)`, and write with `'wb'`.

## 3. HTML, DOM, and BeautifulSoup

- HTML means **Hypertext Markup Language**.
- HTML semantics are represented by tags; visual presentation is handled separately by CSS.
- DOM means **Document Object Model**, a tree representation of an HTML page.
- BeautifulSoup builds a navigable object from raw HTML.
- Install with `pip install bs4`.
- Typical flow: `requests.get(...)`, `raise_for_status()`, `bs4.BeautifulSoup(page.text, 'html.parser')`.
- `select()` uses CSS selectors and returns a list.
- Useful selectors: `div`, `#content`, `.topheader`, `div span`, `div > span`.
- `get_text()` extracts text. `get('href')` extracts an attribute.

## 4. Web scraping caveats

- HTML structure can change without notice.
- Some sites block scraping.
- Poor semantic HTML makes reliable extraction hard.
- Always check `robots.txt` and the website terms of service.

## 5. Web APIs / REST

- API means **Application Programming Interface**.
- A REST API usually returns structured data such as JSON, not HTML.
- CRUD mapping: `POST` create, `GET` read, `PUT` update, `DELETE` delete.
- URL paths identify resources, e.g. `/students`, `/students/34`.
- Data sent to APIs can be JSON with header `Content-Type: application/json`.
- API authentication can use username/password or access tokens.
- Access tokens are commonly passed in an HTTP `Authorization` header.

## 6. Sending email from Python

- SMTP means **Simple Mail Transfer Protocol** and is used to send email.
- Use `smtplib`.
- TLS modes: port `587` = STARTTLS, port `465` = implicit TLS/SSL, port `25` = plaintext and should be avoided.
- Google requires an App Password for programmatic access, after two-factor authentication is enabled.
- Do not hard-code credentials. Use `os.environ`, `getpass.getpass()`, or config files ignored by version control.
- Raw email messages require `From`, `To`, and `Subject` headers. Headers and body are separated by a blank line.
- `smtp.sendmail(sender, recipients, message)` sends the message. `recipients` must be a list. The result is a dictionary of failed recipients; an empty dictionary means all were delivered.
