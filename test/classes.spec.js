import Foo from '../src/classes/user';
import chai, {expect} from 'chai';
//import sinon from 'sinon';
//import sinonChai from 'sinon-chai';
//chai.use(sinonChai);

describe('Foo', () => {

	describe('Constructor', () =>{

		it('should be a function', () =>{
			expect(Foo).to.be.a('function');
		});

		it('should have a property called name', () =>{
			expect(Foo).to.have.property('name');
			expect(Foo.name).to.equal('Foo');
		});

		it('should have a property called prototype', () => {
			expect(Foo).to.have.property('prototype');
			expect(Foo.prototype).to.be.deep.equal({});
		});
	});
});

//
// function hello(name, cb) {
//     cb("hello " + name);
// }
//
// describe("hello", function () {
//     it("should call callback with correct greeting", function () {
//         var cb = sinon.spy();
//
//         hello("foo", cb);
//
//         expect(cb).to.have.been.calledWith("hello davy");
//     });
// });



// describe('User class', () => {
// 	let user = null;
//
// 	beforeEach(() => {
// 			user = new User({name: 'davyengone'});
// 	});
//
// 	xit('should have name', () =>{
// 		expect(user).to.have.property('name').and.not.equal('davyengone');
//
// 		expect(user).to.have.all.keys('firtname', 'lastname');
// 	});
//
// 	it('should have a constructor', () =>{
// 		console.log(User === user.constructor);
//
// 		console.log(user.constructor.name)
//
// 		expect(user.constructor).to.be.equal('');
// 	});
// });
