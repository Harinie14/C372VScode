const mockServices = require('../data/mockServices');

function preparePayment(req, res) {
  const serviceId = req.params.serviceId;
  const service = mockServices.find((item) => String(item.serviceId) === serviceId);

  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }

  return res.status(200).json({
    serviceId: service.serviceId,
    serviceName: service.serviceName,
    amount: service.amount,
    currency: 'sgd',
    status: 'READY_FOR_PAYMENT'
  });
}

module.exports = { preparePayment };
