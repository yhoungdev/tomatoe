#!/bin/bash

run_in_directory() {
  local dir=$1
  local command=$2

  if [ -d "$dir" ]; then
    echo "Navigating to $dir..."
    cd "$dir" || exit
    echo "Running: $command"
    eval "$command"
    echo "Returning to parent directory..."
    cd ..
  else
    echo "Directory $dir does not exist. Skipping..."
  fi
}

run_in_directory "mobile" " npm start"
run_in_directory "web" "pnpm dev"

echo "Script execution completed."
