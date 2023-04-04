#!/bin/bash
# cURL only methods in server
curl -sI $1 | grep "Allow" | cut -d ' ' -f2-
