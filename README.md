# Website

## Meta Data

### Description

```cli
Anneliese Greve is a multidisciplinary artist  working with ceramic, drawing and photography. She currently lives and works in Berlin.
```

### Keywords

```cli
# english
anneliese greve, fine, art, artist, udk, germany, berlin, ceramic, installation, sculpture, contemporary
# german
bildende, kunst, künstler, udk, deutschland, keramik, skulptur, zeitgemäß
```

## Compressing Images

### Next-Gen Image Format

```cli
# compress image
magick img1.jpg -strip -interlace Plane -gaussian-blur 0.05 -quality 85% img1.jpg
# convert to webp
magick mogrify -format webp img1.jpg
```

```cli
# convert all images to webp, and remove all jpg files
magick mogrify -format webp *.*
Get-ChildItem *.jpg | foreach { Remove-Item $_.FullName }
```

### Thumbnails

```cli
magick image_in.jpg -strip -interlace Plane -gaussian-blur 0.05 -quality 15% thumbnail.jpg
```
