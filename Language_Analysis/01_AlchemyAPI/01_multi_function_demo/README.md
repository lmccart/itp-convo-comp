# alchemyapi_node #

A software development kit (sdk) for AlchemyAPI using Node.js


## AlchemyAPI ##

AlchemyAPI offers artificial intelligence as a service. We teach computers to learn how to read and see, and apply our technology to text analysis and image recognition through a cloud-based API. Our customers use AlchemyAPI to transform their unstructured content such as blog posts, news articles, social media posts and images into much more useful structured data. 

AlchemyAPI is a tech startup located in downtown Denver, Colorado. As the world’s most popular text analysis service, AlchemyAPI serves over 3.5 billion monthly API requests to over 35,000 developers. To enable our services, we use artificial intelligence, machine learning, neural networks, natural language processing and massive-scale web crawling. Our technology powers use cases in a variety of industry verticals, including social media monitoring, business intelligence, content recommendations, financial trading and targeted advertising.

More information at: http://www.alchemyapi.com



## API Key ##

To use AlchemyAPI, you'll need to obtain an API key and attach that key to all requests. If you do not already have a key, please visit: http://www.alchemyapi.com/api/register.html



## Getting Started with the Node.js SDK ##

To get started and run the example, simply:

	git clone https://github.com/AlchemyAPI/alchemyapi_node.git
	cd alchemyapi_node
	npm install
	node alchemyapi.js YOUR_KEY_HERE
	node app.js


Just replace YOUR_KEY_HERE with your key, and you should be good to go.

The example will be available at: http://localhost:3000


## A Note about Client Side Javascript ##

This is intended to be used on the server side using Node. While it's possible to utilize AlchemyAPI completely in the browser, it is not recommended. First, this would expose your API key to the world, and this key is a secret. Second, most browsers will block calls to a different domain for security reasons. It's possible to get around this with jsonp, but it's recommended that you proxy any requests to AlchemyAPI through your own server. 

