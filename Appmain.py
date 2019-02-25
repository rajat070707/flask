from flask import Flask, render_template, request,make_response
app = Flask(__name__)

@app.route('/')
def Add():
    return render_template('page_1.html')

@app.route('/page_2',methods=["POST","GET"])

def func1():

        a = request.form.get('name1', type=str)
        b = request.form.get('bday', type=str)
        c='The name of the employee is'+a+'The date of birth of the employee is '+b
        return render_template('page_2.html',first_result=str(c))
@app.route('/')
def Add1():
    return render_template('page_2.html')


@app.route('/page_3a',methods=["POST","GET"])
def func2():

    a='old'

    return render_template('page_3a.html',emp=a)

@app.route('/')
def Add2():
    return render_template('page_2.html')
@app.route('/page_3b',methods=["POST","GET"])

def func3():
    a='new'
    return render_template('page_3b.html',emp=a)

@app.route('/')
def Add4():
    return render_template('page_3a.html')


@app.route('/page_4a',methods=["POST","GET"])
def func4():
    a = request.form.get('course', type=str)
    b = request.form.get('clg', type=str)
    c='The college name is :'+a+'and the course is:'+b
    return render_template('page_4a.html',course=c)

@app.route('/')
def Add5():
    return render_template('page_3b.html')


@app.route('/page_4b',methods=["POST","GET"])
def func5():
    a = request.form.get('company', type=str)
    b = request.form.get('designation', type=str)
    c='The company name is :'+a+'and the designation is:'+b
    return render_template('page_4b.html',course=c)



if __name__ == '__main__':
    app.run(debug = True)