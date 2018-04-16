FROM python:3
MAINTAINER Michal Fojtak <mfojtak@seznam.cz>

RUN pip install --upgrade pip && \
    pip install pyyaml flask
RUN git clone https://github.com/qflow/image-labelling-tool.git && cd image-labelling-tool && \
    pip install -e . && \
    cp -R examples/simple/images /images && cp examples/simple/label_names_example.yml /labels.yaml
WORKDIR /image-labelling-tool
EXPOSE 5000
ADD start.sh /start.sh
RUN chmod +x /start.sh
ENTRYPOINT ["/start.sh"]
