FROM python:3.8-alpine

WORKDIR /backend
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .

CMD [ "python3", "run.py", "--host=0.0.0.0" ]