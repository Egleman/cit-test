#включть контейнеры в текущем каталоге (из фаила docker-compose.yml)
docker-up:
	sudo docker-compose up -d

#собрать/пересобрать контейнеры в текущем каталоге (из фаила docker-compose.yml)
docker-build:
	sudo docker-compose up --build -d

#остановить контейнеры в текущем каталоге
docker-down:
	sudo docker-compose down