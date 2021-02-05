# Website

## Compressing Images

### Thumbnails

```cli
magick image_in.jpg -strip -interlace Plane -gaussian-blur 0.05 -quality 25% thumbnail.jpg
```
