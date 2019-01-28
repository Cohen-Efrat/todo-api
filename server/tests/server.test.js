const request = require('supertest');
const expect= require('expect');

const {Todo} = require('./../models/todo');
const {app} =require('./../server');

beforeEach((done)=>{
  Todo.remove({}).then(()=>done());
});

describe('POST/ todos',()=>{
  it('make new to do',(done)=>{
    var text = 'test test';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((e,r)=>{
      if(e){
        return done(e);
      }
      Todo.find().then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((err)=>done(err));
    });
  });

  it("not create todo",(done)=>{
    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((e,r)=>{
          if(e){
            return done(e);
          }
          Todo.find().then((todos)=>{
            expect(todos.length).toBe(0);
            done();
          }).catch((err)=>done(err));
        });

  });
});
