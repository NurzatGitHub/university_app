FROM python:3.12.2

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . code
WORKDIR /code

EXPOSE 8000

# runs the production server
ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]
