#!/bin/bash

export DB_CON_HOST="localhost"
export DB_CON_PORT="27017"

export DB_CON_STR="mongodb://$DB_CON_HOST:$DB_CON_PORT"

node server/src/index.js