#!/bin/bash

# Define a variable to store the container path
WORKING_PATH="/home/hero/skytrading/dapp"
CONTAINER_PATH="/var/www/skytrading/dapp"
CONTAINER_NAME="skytrading-pm2dapp"
TARGET_BRANCH="origin/production"

# Check if an argument is provided
if [ "$1" == "true" ]; then
    SKIP_IF_CONDITION="true"
else
    SKIP_IF_CONDITION="false"
fi

# goto folder
cd -P "$WORKING_PATH"

# before
before=$(git rev-parse $TARGET_BRANCH)

# git pull from latest repo
git pull ${TARGET_BRANCH//\// }

# after
after=$(git rev-parse $TARGET_BRANCH)

if [ "$before" != "$after" ] || [ "$SKIP_IF_CONDITION" == "true" ]; then
    # copy directory to docker container path
    docker cp . "$CONTAINER_NAME":"$CONTAINER_PATH"

    # docker execute npm run build 和 pm2 start pm2.json
    docker exec -it "$CONTAINER_NAME" npm install
    docker exec -it "$CONTAINER_NAME" npm run build
    docker exec -it "$CONTAINER_NAME" pm2 restart pm2.json
fi