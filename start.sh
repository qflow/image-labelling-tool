#!/bin/bash
python flask_app.py --slic --image_dir /images --label_names /labels.yaml --file_ext jpg --prefix=/image-labelling $*
