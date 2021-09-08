#!/bin/bash

DB_URL=""

echo -n "Mazed MongoDB Username: "
read INPUT_DB_USERNAME

echo -n "Mazed MongoDB Password: "
read -s INPUT_DB_PWD

printf "\n\n"

export DB_USERNAME=$INPUT_DB_USERNAME
export DB_PWD=$INPUT_DB_PWD
export DB_URL="localhost:27017"
export DB_AUTH_SOURCE="mazedDB"