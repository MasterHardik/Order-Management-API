// controllers/orderController.js

const { where } = require('sequelize');
const OrderHeader = require('../models/order_header');
const OrderItems = require('../models/order_item')

exports.createOrder = async (req, res) => {
  try {
    // Validate request body
    if (!req.body.order_name || !req.body.placed_date) {
      return res.status(400).json({ error: 'Order name and placed date are required parameters' });
    }

    // Set default values for optional parameters
    const { currency_uom_id = 'USD', status_id = 'OrderPlaced' } = req.body;
    // Create the order record
    const order = await OrderHeader.create({
      order_id: generateOrderId(),
      order_name: req.body.order_name,
      placed_date: req.body.placed_date,
      approved_date: req.body.approved_date,
      status_id,
      party_id: req.body.party_id,
      currency_uom_id,
      product_store_id: req.body.product_store_id,
      sales_channel_enum_id: req.body.sales_channel_enum_id,
      grand_total: req.body.grand_total,
      completed_date: req.body.completed_date
    });

    // Return the orderId upon successful creation of the order
    res.status(201).json({ orderId: order.order_id });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createOrderItems = async(req,res) =>{
    try{
        const id = req.body.order_id;
        const partseqid = generateOrderId();
        const order = await OrderHeader.findByPk(id);
        const items = req.body.order_items;
        console.log(items);
        for(const item of items){
            const OrderItem = await OrderItems.create({
                order_id: id,
                order_item_seq_id: item.order_item_seq_id,
                proproduct_id: item.product_id,
                item_description: item.item_description,
                quantity: item.quantity,
                unit_amount: item.unit_amount,
                item_type_enum_id: item.item_type_enum_id
            });
        }
        res.status(201).json({ orderId: order.order_id ,
            orderPartSeqId: partseqid});
    } catch(error){
        console.error('Error creating orderItem:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getOrder = async(req,res) =>{
    try{
        const id = req.body.order_id;
        const order = await OrderHeader.findByPk(id);
        const items = await OrderItems.findAll({
            where :{order_id: id}},);
        res.status(200).json({
            ...order.dataValues,
            order_items: items
        })
    } catch(error){
        console.error('fetching order:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllOrder = async(req,res)=>{
    try{
        var response = []
        var orders = await OrderHeader.findAll();
        for(var order of orders){
            const items = await OrderItems.findAll({where:{order_id: order.order_id}});
            var obj = {
                ...order.dataValues,
                order_items: items
            }
            response.push(obj);
        }
        res.status(200).json(response);
    } catch(error){
        console.error('fetching order:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

function generateOrderId() {
    // Get current timestamp in milliseconds
    const timestamp = Date.now();

    // Generate a random number (or use a sequential counter)
    const randomNumber = Math.floor(Math.random() * 1000);

    // Concatenate timestamp and random number to create unique ID
    const orderId = `${timestamp}${randomNumber}`;

    return orderId;
}
