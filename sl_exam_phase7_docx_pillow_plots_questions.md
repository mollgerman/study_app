# Phase 7 Question Bank — Processing pictures and documents

Source: `SL_W04IST_SI4034_lecture_11-doc-img.pdf`

Total questions: 122

## P7-Q001 — python-docx prerequisites
Which command installs the module used in the lecture to create and read DOCX files?

A. pip install python-docx
B. pip install docx2txt
C. pip install pillow
D. pip install matplotlib

**Correct answer:** A
**Explanation:** The lecture uses the python-docx package.

## P7-Q002 — python-docx prerequisites
Which import is used in the lecture to access the Document class directly?

A. from docx import Document
B. from Document import docx
C. import Document from docx
D. from python_docx import docx

**Correct answer:** A
**Explanation:** The example reads and writes DOCX files with from docx import Document.

## P7-Q003 — DOCX format
DOCX files are internally structured using XML rather than being plain text files.

A. True
B. False

**Correct answer:** A
**Explanation:** DOCX is a structured document format and internally stores data using XML.

## P7-Q004 — DOCX format
A DOCX document contains paragraphs, and each paragraph can contain one or more Run objects.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture describes documents as paragraphs, and paragraphs as runs.

## P7-Q005 — DOCX format
What is a Run object in python-docx?

A. A sequence of characters using one style
B. A whole DOCX file
C. A table column
D. A Python loop counter

**Correct answer:** A
**Explanation:** A run is text with one style inside a paragraph.

## P7-Q006 — DOCX format
Which structure is closest to the lecture model of DOCX content?

A. Document → paragraphs → runs
B. Document → rows → cells only
C. Document → pixels → channels
D. Document → plots → axes

**Correct answer:** A
**Explanation:** DOCX text is modeled as paragraphs containing runs.

## P7-Q007 — Reading DOCX
Given doc = Document("mydoc.docx"), what does len(doc.paragraphs) return?

A. The number of paragraph objects in the document
B. The number of pages in the document
C. The number of styles in the document
D. The number of words in the first paragraph

**Correct answer:** A
**Explanation:** doc.paragraphs is the list of paragraph objects.

## P7-Q008 — Reading DOCX
Which expression reads the plain text of the first paragraph?

A. doc.paragraphs[0].text
B. doc.text[0]
C. doc.runs[0].paragraph
D. doc.first.text()

**Correct answer:** A
**Explanation:** The paragraph text is accessed through the .text attribute.

## P7-Q009 — Reading DOCX
Which expression reads the text of the first run in the second paragraph?

A. doc.paragraphs[1].runs[0].text
B. doc.runs[1].paragraphs[0].text
C. doc.paragraphs[0].runs[1].text
D. doc[1][0].text

**Correct answer:** A
**Explanation:** Runs are inside paragraphs, so the second paragraph is index 1 and first run is index 0.

## P7-Q010 — Reading DOCX
In Python indexing, doc.paragraphs[1] refers to the first paragraph.

A. True
B. False

**Correct answer:** B
**Explanation:** Index 1 refers to the second paragraph. The first paragraph is index 0.

## P7-Q011 — Writing DOCX
Which code creates a new empty DOCX document object?

A. doc = Document()
B. doc = docx.open()
C. doc = new Document
D. doc = Document.new("file.docx")

**Correct answer:** A
**Explanation:** Document() creates a new document.

## P7-Q012 — Writing DOCX
Which method saves a python-docx document to a file?

A. doc.save("myfirstdoc.docx")
B. doc.write("myfirstdoc.docx")
C. save(doc, "myfirstdoc.docx")
D. doc.export("myfirstdoc.docx")

**Correct answer:** A
**Explanation:** The lecture uses doc.save(filename).

## P7-Q013 — Writing DOCX
Which call adds a paragraph with the Title style?

A. doc.add_paragraph("The first paragraph", style="Title")
B. doc.add_text("The first paragraph", style="Title")
C. doc.paragraph("The first paragraph", "Title")
D. doc.add_run("The first paragraph", style="Title")

**Correct answer:** A
**Explanation:** add_paragraph can receive a style argument.

## P7-Q014 — Writing DOCX
doc.add_paragraph("The second paragraph") adds a paragraph with the default style.

A. True
B. False

**Correct answer:** A
**Explanation:** Without a style argument, the paragraph uses the default style.

## P7-Q015 — Headings
Which method adds a heading to a python-docx document?

A. doc.add_heading("Chapter 1", level=0)
B. doc.heading("Chapter 1")
C. doc.add_paragraph_heading("Chapter 1")
D. doc.title("Chapter 1")

**Correct answer:** A
**Explanation:** The lecture uses add_heading(text, level=...).

## P7-Q016 — Headings
A heading in python-docx is a special kind of paragraph.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture states that a heading is a different kind of paragraph.

## P7-Q017 — Headings
In python-docx, heading levels go from 0 up to 9.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture states heading levels are from 0 up to 9.

## P7-Q018 — Headings
add_heading() returns a paragraph object.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture explicitly states that add_heading returns a paragraph.

## P7-Q019 — Styles
Which type of style applies to runs?

A. Character style
B. Worksheet style
C. Pixel style
D. Axis style

**Correct answer:** A
**Explanation:** Character styles apply to runs.

## P7-Q020 — Styles
Which type of style applies to paragraphs?

A. Paragraph style
B. Character style only
C. Image style only
D. Table-cell style only

**Correct answer:** A
**Explanation:** Paragraph styles apply to paragraphs.

## P7-Q021 — Styles
A linked style can apply to both paragraphs and runs.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture lists linked style as applying to both.

## P7-Q022 — Styles
When using a paragraph style name as a run character style in Word naming convention, what suffix is added?

A.  Char
B.  Run
C.  Text
D.  Style

**Correct answer:** A
**Explanation:** The lecture says to add “ Char”, for example “Caption Char”.

## P7-Q023 — Styles
Which expression sets the first paragraph style to Title?

A. doc.paragraphs[0].style = "Title"
B. doc.style.paragraphs[0] = "Title"
C. doc.paragraphs[0].runs.style = "Title"
D. doc.set_style(0, "Title")

**Correct answer:** A
**Explanation:** The style attribute of the paragraph is assigned directly.

## P7-Q024 — Styles
Which expression makes the first run of the second paragraph bold?

A. doc.paragraphs[1].runs[0].bold = True
B. doc.paragraphs[1].bold[0] = True
C. doc.runs[1].paragraphs[0].bold = True
D. doc.paragraphs[1].runs[0].style.bold()

**Correct answer:** A
**Explanation:** Run formatting attributes such as bold can be assigned directly.

## P7-Q025 — Styles
Run objects can have attributes such as bold, italic, underline, and all_caps.

A. True
B. False

**Correct answer:** A
**Explanation:** These are listed as run attributes in the lecture.

## P7-Q026 — DOCX pictures and breaks
Which method adds a picture to a DOCX document?

A. doc.add_picture("my_img.png", width=docx.shared.Cm(8))
B. doc.insert_image("my_img.png")
C. doc.picture.add("my_img.png")
D. doc.add_png("my_img.png")

**Correct answer:** A
**Explanation:** The lecture uses add_picture with optional width or height.

## P7-Q027 — DOCX pictures and breaks
Which object is used in the example to express picture width in centimeters?

A. docx.shared.Cm
B. docx.units.Centimeter
C. PIL.Cm
D. matplotlib.Cm

**Correct answer:** A
**Explanation:** The example uses docx.shared.Cm(8).

## P7-Q028 — DOCX pictures and breaks
Which method inserts a break inside an existing run?

A. run.add_break()
B. run.break_line()
C. paragraph.add_line()
D. doc.add_separator()

**Correct answer:** A
**Explanation:** The lecture uses runs[i].add_break().

## P7-Q029 — DOCX pictures and breaks
Which constant is used in the lecture for a page break?

A. docx.enum.text.WD_BREAK.PAGE
B. docx.BREAK.PAGE_ONLY
C. Document.PAGE_BREAK
D. WD_PAGE.BREAK

**Correct answer:** A
**Explanation:** The page-break example uses docx.enum.text.WD_BREAK.PAGE.

## P7-Q030 — DOCX tables
Which method creates a Word table in python-docx?

A. doc.add_table(rows=1, cols=2)
B. doc.table(rows=1, cols=2)
C. doc.add_grid(1, 2)
D. docx.Table.create(doc, 1, 2)

**Correct answer:** A
**Explanation:** The lecture uses add_table(rows=1, cols=2).

## P7-Q031 — DOCX tables
In the table example, what does table.rows[0].cells access?

A. The cells of the first row
B. The first column only
C. All rows except the header
D. The table style list

**Correct answer:** A
**Explanation:** rows[0] is the first row and .cells gives its cells.

## P7-Q032 — DOCX tables
Which method adds a new row to a DOCX table?

A. table.add_row()
B. table.row_add()
C. table.insert_row_after()
D. doc.add_table_row()

**Correct answer:** A
**Explanation:** The lecture uses table.add_row().cells.

## P7-Q033 — DOCX tables
When assigning numeric data to a DOCX table cell text, the example converts the value with str().

A. True
B. False

**Correct answer:** A
**Explanation:** The example uses row_cells[1].text = str(level).

## P7-Q034 — Pillow prerequisites
Which command installs the image manipulation package used in the lecture?

A. pip install pillow
B. pip install imageio
C. pip install pil-core
D. pip install matplotlib

**Correct answer:** A
**Explanation:** The lecture uses Pillow for image manipulation.

## P7-Q035 — Pillow prerequisites
Although the package is called Pillow, which module name is used for compatibility?

A. PIL
B. Pillow
C. ImageLib
D. Photoshop

**Correct answer:** A
**Explanation:** The lecture notes that the module still uses the name PIL.

## P7-Q036 — Pillow prerequisites
Pillow is a fork of the original PIL library.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture explicitly says Pillow is the fork of the original PIL.

## P7-Q037 — Pillow colors
What does the A in RGBA stand for?

A. Alpha / opacity
B. Absolute value
C. Axis
D. Array

**Correct answer:** A
**Explanation:** Alpha controls transparency/opacity.

## P7-Q038 — Pillow colors
Which RGBA value represents fully opaque red?

A. (255, 0, 0, 255)
B. (0, 255, 0, 255)
C. (255, 255, 255, 0)
D. (0, 0, 255, 255)

**Correct answer:** A
**Explanation:** Red is 255 in the red channel, 0 in green/blue, and 255 alpha is opaque.

## P7-Q039 — Pillow colors
What alpha value means fully transparent in RGBA?

A. 0
B. 1
C. 128
D. 255

**Correct answer:** A
**Explanation:** Alpha 0 means fully transparent.

## P7-Q040 — Pillow colors
What alpha value means fully opaque in RGBA?

A. 255
B. 0
C. 1
D. 100

**Correct answer:** A
**Explanation:** Alpha 255 means fully opaque.

## P7-Q041 — Pillow colors
Which import is used to convert color names into RGB/RGBA values?

A. from PIL import ImageColor
B. from PIL import ColorImage
C. import Image.RGBA
D. from matplotlib import ImageColor

**Correct answer:** A
**Explanation:** The lecture uses ImageColor from PIL.

## P7-Q042 — Pillow colors
Which expression returns the RGB tuple for the color name red?

A. ImageColor.getrgb("red")
B. ImageColor.rgb("red")
C. Image.getcolor("red")
D. PIL.rgb("red")

**Correct answer:** A
**Explanation:** The example uses ImageColor.getrgb("red").

## P7-Q043 — Pillow colors
Which expression can return an RGBA value for red?

A. ImageColor.getcolor("red", "RGBA")
B. ImageColor.getrgba("red")
C. Image.getrgba("red")
D. RGBA("red")

**Correct answer:** A
**Explanation:** The example uses getcolor with mode RGBA.

## P7-Q044 — Pillow files
Which function opens an image file with Pillow?

A. Image.open("example.gif")
B. Image.load("example.gif")
C. PIL.open_image("example.gif")
D. open.Image("example.gif")

**Correct answer:** A
**Explanation:** The lecture uses Image.open(filename).

## P7-Q045 — Pillow files
Which method saves an image object to a file?

A. image.save("example.png")
B. image.write("example.png")
C. save(image, "example.png")
D. image.export_png()

**Correct answer:** A
**Explanation:** Image objects have a save method.

## P7-Q046 — Pillow files
PIL recognizes the output file format from the file extension when saving.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture states that PIL recognizes the extension of the file.

## P7-Q047 — Pillow files
Which code creates a new 200x100 red image in memory?

A. Image.new("RGBA", (200,100), "red")
B. Image.create(200,100,"red")
C. Image.open("red", (200,100))
D. Image.new((200,100), "RGBA", "red")

**Correct answer:** A
**Explanation:** The lecture uses Image.new(mode, size, color).

## P7-Q048 — Pillow files
What type must be used for the size argument in Image.new("RGBA", (200,100), "red")?

A. A tuple (width, height)
B. A string "200x100"
C. Two separate arguments after mode
D. A dictionary with x and y

**Correct answer:** A
**Explanation:** The size is passed as a tuple.

## P7-Q049 — Pillow properties
Which property gives the width of a Pillow image?

A. img.width
B. img.x
C. img.columns
D. img.size.width

**Correct answer:** A
**Explanation:** The lecture lists width as an image property.

## P7-Q050 — Pillow properties
Which property gives the height of a Pillow image?

A. img.height
B. img.y
C. img.rows
D. img.size.height

**Correct answer:** A
**Explanation:** The lecture lists height as an image property.

## P7-Q051 — Pillow properties
What does img.size return?

A. A tuple (width, height)
B. Only width
C. Only height
D. The file size in bytes

**Correct answer:** A
**Explanation:** The lecture says size returns a tuple (width, height).

## P7-Q052 — Pillow properties
An image opened from a file can have a filename property.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture lists filename if opened from the file.

## P7-Q053 — Pillow properties
The format property is one of the properties listed for a picture object.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture lists format as a picture property.

## P7-Q054 — Pillow coordinates
In Pillow image coordinates, where is point (0, 0)?

A. At the top-left corner
B. At the bottom-left corner
C. At the center
D. At the bottom-right corner

**Correct answer:** A
**Explanation:** The coordinate diagram shows (0,0) at the top-left corner.

## P7-Q055 — Pillow crop
What does img.crop((100,100,400,200)) use as its argument?

A. A box tuple with left, upper, right, lower coordinates
B. Only width and height
C. A color tuple
D. A list of pixels

**Correct answer:** A
**Explanation:** Pillow crop uses a rectangular box tuple.

## P7-Q056 — Pillow crop
In img.crop((100,100,400,200)), what is the cropped width?

A. 300 pixels
B. 100 pixels
C. 400 pixels
D. 200 pixels

**Correct answer:** A
**Explanation:** The width is right - left = 400 - 100 = 300.

## P7-Q057 — Pillow crop
In img.crop((100,100,400,200)), what is the cropped height?

A. 100 pixels
B. 200 pixels
C. 300 pixels
D. 400 pixels

**Correct answer:** A
**Explanation:** The height is lower - upper = 200 - 100 = 100.

## P7-Q058 — Pillow flipping
Which call mirrors an image left-to-right?

A. img.transpose(Image.Transpose.FLIP_LEFT_RIGHT)
B. img.rotate(Image.FLIP_LEFT_RIGHT)
C. img.flip("left_right")
D. Image.flip(img)

**Correct answer:** A
**Explanation:** The lecture uses transpose with Image.Transpose.FLIP_LEFT_RIGHT.

## P7-Q059 — Pillow rotation
Which call rotates an image by 90 degrees?

A. img.rotate(90)
B. img.transpose(90)
C. img.turn(90)
D. rotate(img, 90)

**Correct answer:** A
**Explanation:** The lecture uses img.rotate(90).

## P7-Q060 — Pillow rotation
What does expand=True do when rotating an image?

A. Expands the output image so the rotated image fits
B. Increases image brightness
C. Rotates only transparent pixels
D. Changes the image format

**Correct answer:** A
**Explanation:** The lecture says expand=True makes the rotated image fit.

## P7-Q061 — Pillow rotation
Rotating with expand=False can cut corners.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture says rotated images may have cut corners when expand=False.

## P7-Q062 — Pillow resizing
Which method changes the pixel dimensions of a Pillow image and returns a new image?

A. resize()
B. scale_in_place()
C. reshape()
D. set_size()

**Correct answer:** A
**Explanation:** resize returns a new image.

## P7-Q063 — Pillow resizing
resize() modifies the original picture object in place.

A. True
B. False

**Correct answer:** B
**Explanation:** The lecture states resize returns a new image and does not modify the original size.

## P7-Q064 — Pillow resizing
After resizing, the ratio of width and height can change.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture explicitly warns that ratio can change after resizing.

## P7-Q065 — Pillow resizing
What type of argument does resize() expect for the new size?

A. A tuple such as (new_width, new_height)
B. A string such as "new_width,new_height"
C. Two separate positional arguments
D. A color value

**Correct answer:** A
**Explanation:** The lecture says the argument of resize() is a tuple.

## P7-Q066 — Pillow resizing
Which resampling filter is shown in the lecture example?

A. Image.Resampling.LANCZOS
B. Image.Resampling.SQL
C. Image.Resize.BILINEAR_ONLY
D. Image.Filter.SMOOTH

**Correct answer:** A
**Explanation:** The resize example uses resample=Image.Resampling.LANCZOS.

## P7-Q067 — Pillow copying/pasting
Which method creates a copy of an image object?

A. img.copy()
B. img.clone()
C. copy(img)
D. img.duplicate_file()

**Correct answer:** A
**Explanation:** The lecture uses img.copy().

## P7-Q068 — Pillow copying/pasting
Which method pastes one image into another?

A. img.paste(copied_img, location)
B. img.insert(copied_img, location)
C. img.merge(copied_img)
D. img.add_layer(copied_img)

**Correct answer:** A
**Explanation:** The lecture uses paste(image, location).

## P7-Q069 — Pillow copying/pasting
What is location = (20,30) in img.paste(copied_img, location)?

A. The top-left target position where the copied image is pasted
B. The width and height of the pasted image
C. The image color
D. The opacity value

**Correct answer:** A
**Explanation:** The location tuple gives the paste position.

## P7-Q070 — Pillow copying/pasting
Which method is shown only for debugging or previewing the image?

A. img.show()
B. img.debug()
C. img.print()
D. img.preview_console()

**Correct answer:** A
**Explanation:** The examples use img.show() for debugging purposes.

## P7-Q071 — Pillow drawing
Which import is needed to draw shapes on images?

A. from PIL import Image, ImageDraw
B. from PIL import DrawImage
C. import matplotlib.draw as ImageDraw
D. from docx import ImageDraw

**Correct answer:** A
**Explanation:** The lecture imports Image and ImageDraw from PIL.

## P7-Q072 — Pillow drawing
Which object is created before drawing shapes on an image?

A. pic = ImageDraw.Draw(img)
B. pic = img.Drawing()
C. pic = Image.draw(img)
D. pic = Draw.new()

**Correct answer:** A
**Explanation:** The drawing object is created with ImageDraw.Draw(img).

## P7-Q073 — Pillow drawing
Drawing with ImageDraw modifies the original image object.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture states that the original image is actually modified.

## P7-Q074 — Pillow drawing
Which method draws a single point?

A. pic.point((40,60), fill="yellow")
B. pic.pixel((40,60), "yellow")
C. pic.dot((40,60), "yellow")
D. img.point("yellow", (40,60))

**Correct answer:** A
**Explanation:** The lecture uses pic.point(...).

## P7-Q075 — Pillow drawing
Which method draws a line?

A. pic.line([start,end], width=3, fill="red")
B. pic.drawline(start,end,"red")
C. img.line(start,end,"red")
D. pic.segment(start,end)

**Correct answer:** A
**Explanation:** The lecture uses pic.line([...], width=..., fill=...).

## P7-Q076 — Pillow drawing
Which method draws a rectangle?

A. pic.rectangle((10,10,30,40), fill="blue")
B. pic.box((10,10,30,40), fill="blue")
C. img.rectangle((10,10,30,40))
D. pic.rect(width=10,height=40)

**Correct answer:** A
**Explanation:** The lecture uses pic.rectangle(...).

## P7-Q077 — Pillow drawing
Which method draws an ellipse?

A. pic.ellipse((200,50,260,90), fill="cyan")
B. pic.circle((200,50,260,90), fill="cyan")
C. img.ellipse((200,50,260,90))
D. pic.oval(fill="cyan")

**Correct answer:** A
**Explanation:** The lecture uses pic.ellipse(...).

## P7-Q078 — Pillow text
Which method adds text to an image with ImageDraw?

A. pic.text((20,150), "Hello, world!", fill="red")
B. pic.write((20,150), "Hello, world!")
C. img.text("Hello, world!", (20,150))
D. ImageFont.text(pic, "Hello")

**Correct answer:** A
**Explanation:** The lecture uses ImageDraw.text.

## P7-Q079 — Pillow text
Which module is imported to use a TrueType font in Pillow?

A. ImageFont
B. TrueType
C. FontImage
D. TTFont from docx

**Correct answer:** A
**Explanation:** The lecture imports ImageFont from PIL.

## P7-Q080 — Pillow text
Which call loads a TrueType font from a font path and size?

A. ImageFont.truetype(path, size)
B. ImageFont.open(path, size)
C. ImageFont.load_ttf(path, size)
D. ImageFont.create(path, size)

**Correct answer:** A
**Explanation:** The lecture uses ImageFont.truetype(path, size).

## P7-Q081 — Pillow text
ImageDraw can use built-in fonts or OpenType/TrueType fonts available in the system.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture says built-in and OT/TT fonts can be used.

## P7-Q082 — Matplotlib prerequisites
Which module is installed for creating plots?

A. matplotlib
B. openpyxl
C. python-docx
D. pillow

**Correct answer:** A
**Explanation:** The lecture installs matplotlib for plots.

## P7-Q083 — Matplotlib basics
Which import alias is used in the lecture for pyplot?

A. import matplotlib.pyplot as plt
B. import matplotlib as pyplot
C. from matplotlib import plt as pyplot
D. import pyplot.matplotlib as plt

**Correct answer:** A
**Explanation:** The lecture imports pyplot as plt.

## P7-Q084 — Matplotlib basics
Which function sets the X axis label?

A. plt.xlabel("X axis")
B. plt.xaxis("X axis")
C. plt.labelx("X axis")
D. plt.set_x("X axis")

**Correct answer:** A
**Explanation:** The lecture uses plt.xlabel(...).

## P7-Q085 — Matplotlib basics
Which function sets the Y axis label?

A. plt.ylabel("Y axis")
B. plt.yaxis("Y axis")
C. plt.labely("Y axis")
D. plt.set_y("Y axis")

**Correct answer:** A
**Explanation:** The lecture uses plt.ylabel(...).

## P7-Q086 — Matplotlib basics
Which function sets the chart title?

A. plt.title("My chart")
B. plt.name("My chart")
C. plt.header("My chart")
D. plt.caption("My chart")

**Correct answer:** A
**Explanation:** The lecture uses plt.title(...).

## P7-Q087 — Matplotlib basics
Which function displays the plot window?

A. plt.show()
B. plt.display()
C. plt.open()
D. plt.render()

**Correct answer:** A
**Explanation:** The lecture uses plt.show().

## P7-Q088 — Matplotlib basics
If you call plt.plot([1,2,4,8]) without X values, what X values does matplotlib assume?

A. 0, 1, 2, 3
B. 1, 2, 4, 8
C. 1, 2, 3, 4
D. No X values; it raises TypeError

**Correct answer:** A
**Explanation:** When X values are not provided, matplotlib uses indexes 0, 1, 2, and so on.

## P7-Q089 — Matplotlib basics
By default, plt.plot draws lines.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture states that by default a plot is drawn with lines.

## P7-Q090 — Matplotlib styles
In the format string "r^", what does r mean?

A. Red color
B. Right axis
C. Rectangle marker
D. Reverse order

**Correct answer:** A
**Explanation:** The lecture lists r as red.

## P7-Q091 — Matplotlib styles
In the format string "bo", what does b mean?

A. Blue color
B. Bold line
C. Bar chart
D. Background

**Correct answer:** A
**Explanation:** The lecture lists b as blue.

## P7-Q092 — Matplotlib styles
In the format string "r^", what does ^ mean?

A. Triangle marker
B. Line marker
C. Square marker
D. Circle marker

**Correct answer:** A
**Explanation:** The lecture lists ^ as triangles.

## P7-Q093 — Matplotlib styles
In the format string "bo", what does o mean?

A. Circle marker
B. Orange color
C. Output file
D. Open plot

**Correct answer:** A
**Explanation:** The lecture lists o as circles.

## P7-Q094 — Matplotlib styles
Which marker character is listed for squares?

A. s
B. q
C. #
D. x

**Correct answer:** A
**Explanation:** The lecture lists s as squares.

## P7-Q095 — Matplotlib axis/save
Which function sets the viewport of the plot?

A. plt.axis([...])
B. plt.viewport([...])
C. plt.window([...])
D. plt.limits([...])

**Correct answer:** A
**Explanation:** The lecture uses axis() to set the viewport.

## P7-Q096 — Matplotlib axis/save
What is the order of values in plt.axis([-1, 5, 0, 4]) according to the lecture comment?

A. xmin, xmax, ymin, ymax
B. ymin, ymax, xmin, xmax
C. xmin, ymin, xmax, ymax
D. xmax, xmin, ymax, ymin

**Correct answer:** A
**Explanation:** The comment says order: xmin, xmax, ...; full order is xmin, xmax, ymin, ymax.

## P7-Q097 — Matplotlib axis/save
Which function saves a plot to a file?

A. plt.savefig("my_first_plot.png")
B. plt.save("my_first_plot.png")
C. plt.export("my_first_plot.png")
D. plt.write_png("my_first_plot.png")

**Correct answer:** A
**Explanation:** The lecture uses savefig to save a plot.

## P7-Q098 — Matplotlib plot types
Which method creates line plots?

A. plot
B. scatter
C. bar
D. hist_docx

**Correct answer:** A
**Explanation:** The lecture lists plot as line plots.

## P7-Q099 — Matplotlib plot types
Which method creates a series of points?

A. scatter
B. plot_docx
C. bar
D. runs

**Correct answer:** A
**Explanation:** The lecture lists scatter as a series of points.

## P7-Q100 — Matplotlib plot types
Which method creates a bar chart?

A. bar
B. barsheet
C. scatter
D. rectangle

**Correct answer:** A
**Explanation:** The lecture lists bar as bar chart.

## P7-Q101 — Matplotlib plot types
scatter is listed as the function for bar charts.

A. True
B. False

**Correct answer:** B
**Explanation:** scatter is for a series of points; bar is for bar charts.

## P7-Q102 — Matplotlib plot types
bar is listed as the function for a bar chart.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture lists bar as bar chart.

## P7-Q103 — Matplotlib plot types
plot is listed as the function for line plots.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture lists plot as line plots.

## P7-Q104 — Matplotlib plot types
savefig() is used to display a chart interactively and cannot save files.

A. True
B. False

**Correct answer:** B
**Explanation:** savefig saves the plot to a file.

## P7-Q105 — Matplotlib basics
plt.show() is used in the first plot example after plt.plot(...).

A. True
B. False

**Correct answer:** A
**Explanation:** The first plot example ends with plt.show().

## P7-Q106 — Matplotlib multiple series
In the lecture example plt.plot([1,2,3,4],[1,4,8,16],"r^", [1,2,3,4],[-1,0,1,2],"bo"), how many data series are plotted?

A. Two
B. One
C. Three
D. Four

**Correct answer:** A
**Explanation:** The call provides two X/Y/format groups: one red triangle series and one blue circle series.

## P7-Q107 — Matplotlib multiple series
Which format string in the lecture example draws blue circles?

A. bo
B. r^
C. bs
D. g-

**Correct answer:** A
**Explanation:** b means blue and o means circle.

## P7-Q108 — Matplotlib multiple series
Which format string in the lecture example draws red triangles?

A. r^
B. bo
C. rs
D. b^

**Correct answer:** A
**Explanation:** r means red and ^ means triangle.

## P7-Q109 — DOCX vs Pillow
python-docx is the package used for image cropping and rotation.

A. True
B. False

**Correct answer:** B
**Explanation:** Image cropping and rotation are done with Pillow/PIL, not python-docx.

## P7-Q110 — DOCX vs Pillow
Pillow is used for manipulating pictures, while python-docx is used for DOCX documents.

A. True
B. False

**Correct answer:** A
**Explanation:** This matches the separation in the lecture.

## P7-Q111 — DOCX vs Matplotlib
matplotlib is the package used in the lecture for creating plots and charts.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture installs matplotlib for plots.

## P7-Q112 — DOCX vs Matplotlib
python-docx is installed with pip install matplotlib.

A. True
B. False

**Correct answer:** B
**Explanation:** python-docx is installed with pip install python-docx.

## P7-Q113 — Pillow vs Matplotlib
ImageDraw.Draw(img) is a Pillow concept, not a matplotlib concept.

A. True
B. False

**Correct answer:** A
**Explanation:** ImageDraw is imported from PIL.

## P7-Q114 — Pillow vs Matplotlib
plt.plot([1,2,4,8]) creates a Pillow image object.

A. True
B. False

**Correct answer:** B
**Explanation:** plt.plot creates a matplotlib plot, not a Pillow image object.

## P7-Q115 — DOCX styles
A style can include settings such as font face, italic, and bold.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture describes style as settings such as font face, italic, bold.

## P7-Q116 — DOCX format
A paragraph can consist of multiple runs when different parts of the paragraph use different styles.

A. True
B. False

**Correct answer:** A
**Explanation:** Runs represent sequences of characters using one style.

## P7-Q117 — Pillow files
Image.open("example.gif").save("example.png") can convert a GIF file to PNG.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture example opens a GIF and saves it as PNG; PIL recognizes extensions.

## P7-Q118 — Pillow files
Image.new("RGBA", (200,100)) creates a 200 by 100 image.

A. True
B. False

**Correct answer:** A
**Explanation:** The size tuple is width 200 and height 100.

## P7-Q119 — Pillow resize
new2_img = my_img.resize((w+100, h)) changes width but keeps the old height.

A. True
B. False

**Correct answer:** A
**Explanation:** The tuple passes a wider width and the same height h.

## P7-Q120 — Pillow crop
img.crop((100,100,400,200)) returns a new cropped image assigned in the example to img2.

A. True
B. False

**Correct answer:** A
**Explanation:** The example assigns the crop result to img2.

## P7-Q121 — Pillow show
img.show() is used in the lecture examples for debugging or preview purposes.

A. True
B. False

**Correct answer:** A
**Explanation:** The lecture comment says it is for debugging purposes.

## P7-Q122 — Matplotlib axis
plt.axis([-1,5,0,4]) sets only the X-axis limits.

A. True
B. False

**Correct answer:** B
**Explanation:** The four values set both X and Y limits.
