# takes 10 minutes to build

docker build --no-cache -t camp-demo-2  .

# VS Code extension

https://code.visualstudio.com/docs/containers/overview#_installation

# Environment variables

printenv

# Cognitive Services quickstarts

https://github.com/Azure-Samples/cognitive-services-quickstart-code/blob/master/javascript/BingSpellCheck/bing_spell_check_quickstart.js

# install SDKs and other dependencies

npm install @azure/cognitiveservices-translatortext

# Docker run

docker run -it --rm -p 127.0.0.1:8443:8443 --env-file=.env camp-demo-2

# Az CLI

az cognitiveservices account list  --resource-group diberry-devrel-camp-2020 --subscription 65a1016d-0f67-45d2-b838-b8f373d6d52e