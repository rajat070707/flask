from flask import Flask, render_template,request,make_response
app= Flask(__name__)

@app.route('/')
def add1():
    return render_template('assignresult1.html')

@app.route('/assignresult2',methods=['POST','GET'])
def result():
    if request.method=='POST':
        a1=request.form['n1']
        a2=request.form['n2']
        global result
        result=int(a1)+int(a2)
        # return render_template("08result.html",result=str(result))

        resp = make_response(render_template('assignresult2.html' ,result=str(result) ))
        resp.set_cookie('result', str(result))
        return resp



@app.route('/')
def add():
    return render_template('assignresult2.html')


@app.route('/assignresult3', methods=['POST', 'GET'])
def result1():
    if request.method == 'POST':
        a = request.form['n3']
        result=int(request.cookies.get('result'))
        sum=int(result)+int(a)


        return render_template('assignresult3.html', result1=str(sum))


if __name__ == '__main__':
   app.run(debug = True)