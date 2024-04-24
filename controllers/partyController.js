// controllers/partyController.js
const Party = require('../models/party');

exports.getAllParties = async (req, res) => {
  try {
    const parties = await Party.findAll();
    res.status(200).json(parties);
  } catch (error) {
    console.error('Error fetching parties:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getPartyById = async (req, res) => {
  try {
    const party = await Party.findByPk(req.params.id);
    if (!party) {
      return res.status(404).json({ error: 'Party not found' });
    }
    res.status(200).json(party);
  } catch (error) {
    console.error('Error fetching party by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createParty = async (req, res) => {
  try {
    console.log(req.body)
    const party = await Party.create(req.body);
    res.status(201).json(party);
  } catch (error) {
    console.error('Error creating party:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateParty = async (req, res) => {
  try {
    const party = await Party.findByPk(req.params.id);
    if (!party) {
      return res.status(404).json({ error: 'Party not found' });
    }
    await party.update(req.body);
    res.status(200).json(party);
  } catch (error) {
    console.error('Error updating party:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteParty = async (req, res) => {
  try {
    const party = await Party.findByPk(req.params.id);
    if (!party) {
      return res.status(404).json({ error: 'Party not found' });
    }
    await party.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting party:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
