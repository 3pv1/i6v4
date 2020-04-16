
import { after, before, describe, finish                              } from '../../../covert/index.mjs';
import { connect as connect_stealth, disconnect as disconnect_stealth } from '../Stealth.mjs';
import { connect as connect_client, disconnect as disconnect_client   } from '../Client.mjs';



before(connect_stealth);
describe(connect_client);

describe('client.services.peer.save', function(assert) {

	assert(this.client !== null);
	assert(typeof this.client.services.peer.save === 'function');

	this.client.services.peer.save({
		host:       '127.0.0.3',
		connection: 'mobile'
	}, (response) => {
		assert(response === true);
	});

});

describe('client.services.peer.read', function(assert) {

	assert(this.client !== null);
	assert(typeof this.client.services.peer.read === 'function');

	this.client.services.peer.read({
		host: '127.0.0.3'
	}, (response) => {

		assert(response !== null && response.domain === '127.0.0.3');
		assert(response !== null && response.connection === 'mobile');

	});

});

describe('client.services.peer.proxy', function(assert) {

	assert(this.client !== null);
	assert(typeof this.client.services.peer.proxy === 'function');

	this.client.services.peer.proxy({
		host: '127.0.0.3',
		headers: {
			service: 'settings',
			method:  'read'
		},
		payload: {
			internet: true
		}
	}, (response) => {

		assert(response !== null && response.internet !== null);
		assert(response.internet.connection === 'mobile');
		assert(response.internet.history === 'stealth');
		assert(response.internet.useragent === 'stealth');

	});

});

describe('client.services.peer.refresh', function(assert) {

	assert(this.client !== null);
	assert(typeof this.client.services.peer.refresh === 'function');

	this.client.services.peer.refresh({
		host: '127.0.0.3'
	}, (response) => {

		assert(response !== null && response.domain === '127.0.0.3');
		assert(response !== null && response.connection === 'mobile');

	});

});

describe('client.services.peer.remove', function(assert) {

	assert(this.client !== null);
	assert(typeof this.client.services.peer.remove === 'function');

	this.client.services.peer.remove({
		host: '127.0.0.3'
	}, (response) => {
		assert(response === true);
	});

});

describe(disconnect_client);
after(disconnect_stealth);


export default finish('stealth/client/Peer');
