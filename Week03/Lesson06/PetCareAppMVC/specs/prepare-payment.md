# Feature: Prepare payment details

## 1. User goal
As a pet owner, I want to review my selected pet service and its amount before proceeding to payment.

## 2. Scope
This feature prepares payment details using a mock service catalogue and returns a JSON response.

- Use the server-side catalogue price.
- Do not accept a client-supplied payment amount.
- No login is required for this classroom mock.

Out of scope:
- Charging money or processing payments.
- Payment gateway integration.
- Creating or saving transactions.
- New database tables.
- New EJS pages.
- Changes to existing features.

## 3. Request
HTTP method: GET  
URL: /payments/prepare/:serviceId

The serviceId URL parameter identifies the selected service.

## 4. Service catalogue
The mock catalogue contains these services:

| Service ID | Service name | Price (SGD) |
| --- | --- | --- |
| 1 | Vaccination | 35 |
| 2 | Pet Grooming | 50 |
| 3 | Boarding | 80 |

Service IDs and prices are numbers. Service names are strings.

## 5. Successful response
When the requested service exists, return HTTP 200 with exactly these five JSON fields:

- serviceId: number matching the selected catalogue service ID.
- serviceName: string matching the catalogue service name exactly.
- amount: number matching the catalogue price. It is expressed in Singapore dollars, not cents; for example, amount 35 means SGD 35.00. It must remain a JSON number.
- currency: string with the exact value "sgd".
- status: string with the exact value "READY_FOR_PAYMENT".

Example for GET /payments/prepare/1:

{
  "serviceId": 1,
  "serviceName": "Vaccination",
  "amount": 35,
  "currency": "sgd",
  "status": "READY_FOR_PAYMENT"
}

## 6. Unsuccessful response
When the requested service ID does not exist in the catalogue, return HTTP 404 with exactly this JSON object:

{
  "error": "Service not found"
}

## 7. Acceptance criteria
- AC1: GET /payments/prepare/1 returns HTTP 200 with serviceId 1, serviceName "Vaccination" and amount 35.
- AC1 also requires the response to satisfy AC5.
- AC2: GET /payments/prepare/2 returns HTTP 200 with serviceId 2, serviceName "Pet Grooming" and amount 50.
- AC2 also requires the response to satisfy AC5.
- AC3: GET /payments/prepare/3 returns HTTP 200 with serviceId 3, serviceName "Boarding" and amount 80.
- AC3 also requires the response to satisfy AC5.
- AC4: GET /payments/prepare/999 returns HTTP 404 with exactly {"error":"Service not found"}.
- AC5: Every successful response contains exactly the five fields specified in Section 5, with the correct data types and catalogue values. Currency is "sgd" and status is "READY_FOR_PAYMENT". The amount comes from the server-side catalogue.

## 8. Open questions
- What response should be returned for a non-numeric service ID, such as /payments/prepare/abc?
- What response should be returned when the service ID is omitted?

These behaviours require clarification before adding any new validation rules.