// Cloud: Bunch of Servers connected together
// Request Message and the Response Message consists of components like Headers, Body, Method, URL
// Response is sent along with a status code and status Text
// Request messages refer to the data sent from the user's side.

// Exchanging data in the web is done by making a request to the server and the server sends back the response to the client
// This is done using the HTTP protocol.

// HTTP Methods: 
//    GET: Read Data  (GET www.AkshajStartup.com/api/orders - Get all orders)
//                    (GET www.AkshajStartup.com/api/orders/:id - Get a specific order with id)
//    POST: Insert Data (POST www.AkshajStartup.com/api/orders - Place an order (send data))
//    PUT: Update data (PUT www.AkshajStartup.com/api/orders/:id - Update specific order (params + send data))
//    DELETE: Delete Data (DELETE www.AkshajStartup.com/api/orders/:id - Delete an order (id params)