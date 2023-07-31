rm -r dist &&\
    npm run build &&\
    docker build -t $DOCKER_REPO:$DOCKER_TAG .