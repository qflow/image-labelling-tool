FROM python:3
MAINTAINER Michal Fojtak <mfojtak@seznam.cz>

RUN pip install --upgrade pip && \
    pip install pyyaml flask
RUN git clone https://github.com/yuyu2172/image-labelling-tool.git && cd image-labelling-tool && \
    pip install -e .
WORKDIR /image-labelling-tool
ADD start.sh /start.sh
RUN chmod +x /start.sh
ENTRYPOINT ["/start.sh"]
