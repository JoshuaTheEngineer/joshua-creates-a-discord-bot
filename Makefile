# Setup and runs Bot with NPM
.PHONY: run
run:
	@npm install
	@node deploy-commands.js
	@node .

# Builds the Bot's Docker image
.PHONY: build
build:
	@docker build -t joshuacadavez/discordbot .
	@docker run --name joshuacadavez/discordbot


