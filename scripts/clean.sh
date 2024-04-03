#!/bin/bash

folders_to_remove=(
  'ios/Pods'
  'ios/build'
  'android/build'
  'android/app/build'
  'node_modules'
)

echo "Cleaning up..."

for folder in "${folders_to_remove[@]}"; do
  if [ -d "$folder" ]; then
    echo "Removing: $folder"
    rm -rf "$folder"
  else
    echo "Folder doesn't exists, skipping: $folder"
  fi
done

echo "Cleanup finished"
