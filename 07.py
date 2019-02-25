from flask import Flask ,render_template,request
app=Flask(__name__)

@app.route('/')
def Add():
    return render_template('cal.html')

@app.route('/result1',methods =['POST','GET'])
def result1():
    a= request.form.get('First Number',type=int)
    b = request.form.get('Second Number', type=int)
    sum1=a+b
    return render_template("result1.html",result=sum1)


@app.route('/result2',methods = ['POST','GET'])
def result2():
    a=request.form.get('another number',type=int)
    b=result1().sum1
    return render_template("result2.html",result=str())



if __name__ == '__main__':
   app.run(debug = True)
