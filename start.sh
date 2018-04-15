#!/bin/bash
python flask_app.py --slic --image_dir examples/simple/images --label_names examples/simple/label_names_example.yml --file_ext jpg --prefix=/image-labelling $*
