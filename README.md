# Ollama Companion

A simple service that runs alongside each local Ollama instance.

## Origin

I have a personal PC with a GPU and a laptop, both of which have Ollama installed, synchronized using Syncthing for model syncing. The issue is that by default, Ollama lacks authentication for the local API and there's no history feature. I aim to develop a secure method to expose Ollama from the laptop or desktop with history support.

## Objective

Address the shortcomings in the local Ollama API:

1. Implement proper history support.
2. Implement authentication using tokens for request execution.

Some additional features that would be beneficial:

1. Admin panel to manage access tokens.
2. Strict call count and model limitations per token, similar to what's implemented in [OpenWebUI](https://openwebui.com/).

## Motivation

I use the Ollama API with various tools, such as Obsidian. However, the issue is that Ollama lacks any history or auth support, and there were at one point critical vulnerabilities in Ollama. Thus, using the API without any history support and the associated risks of exposing Ollama prompted me to build this service.

That being said, other solutions do exist:

1. Running Ollama behind a Reverse Proxy as a Decentralized Solution

For instance, utilizing Ollama behind a reverse proxy for auth and implementing the history feature on each client individually is possible. I could set up Ollama behind a reverse proxy and implement a simple script providing auth support. However, on client apps that use Ollama, like Obsidian, I could create a feature or plugin enabling history support. But, You may encounter situations where the history cannot be added for any reason. Or if you're in a corporation using local models, can you view the prompt history from other employees?

If all you need is authentication, this is by far the most straightforward and lightweight solution.

2. Centralized Solutions like litellm or llmgateway

These solutions are excellent and feature-rich but are overkill for what I am looking for and still do not address the problem of exposing Ollama on a server and using this server remotely, especially if it's a personal PC or laptop. Since these solutions are centralized, you would deploy them (for example) on the PC, meaning that this instance would need to see both the laptop and PC Ollamas. If the laptop is exposed without an auth layer, that presents a problem. Thus, I moved away from centralized solutions due to their heavy and feature-rich nature, which might be difficult to deploy next to each Ollama instance.

## Plan

- [x] Import the core utils and decide what will be used.
- [ ] Implement api auth by using JWT. Just as a start in the codebase.
- [ ] Add history support by storing prompts and answers in mongodb.
- [ ] Implement a simple interface in which you generate and set up tokens.
- [ ] Add support for multiple admin accounts to control the access control.
- [ ] Implement an offloading mechanism where each node can be connected to the others and offload the excess requests to it.
- [ ] Implement a simple history sync approach between the connected nodes. (Something like syncthing since it's a decentralized syncing solution).
