# Phase 7 Topics — Processing pictures and documents

Source: `SL_W04IST_SI4034_lecture_11-doc-img.pdf`

Scope: Python only. This phase covers creating DOCX documents with `python-docx`, manipulating images with Pillow/PIL, and plotting data with `matplotlib`.

## 1. DOCX prerequisites and structure
- Install python-docx with pip
- Import Document from docx
- DOCX is XML-based and contains paragraphs and runs
- Run = characters with one style

## 2. Reading and writing DOCX
- Document(filename) opens a DOCX file
- doc.paragraphs gives paragraph objects
- paragraph.text gives plain text
- runs are inside paragraphs
- Document() creates a new file
- doc.save(filename) saves

## 3. Headings, styles, pictures, breaks, tables
- add_heading returns a paragraph and supports levels 0-9
- Paragraph/character/linked styles
- Run attributes include bold, italic, underline, all_caps
- add_picture can receive dimensions
- add_break can insert line/page breaks
- add_table, rows, cells, add_row

## 4. Pillow basics
- Install pillow but import PIL
- RGBA colors use alpha: 0 transparent, 255 opaque
- ImageColor converts color names
- Image.open opens files; Image.new creates images; save writes them

## 5. Pillow image operations
- Image properties include width, height, filename, format, size
- Coordinate origin is top-left
- crop uses a coordinate box
- transpose flips
- rotate supports expand
- resize returns new image and expects a tuple
- copy and paste work with image objects

## 6. Pillow drawing and text
- ImageDraw.Draw(img) creates a drawing object and modifies original image
- point, line, rectangle, ellipse draw shapes
- ImageDraw.text inserts text
- ImageFont.truetype loads OT/TT fonts

## 7. matplotlib plots
- Install matplotlib
- import matplotlib.pyplot as plt
- xlabel/ylabel/title/plot/show build a basic plot
- Missing X values default to 0,1,2,...
- Format strings select colors and markers
- axis sets viewport; savefig writes file
- plot/scatter/bar create line/point/bar charts
