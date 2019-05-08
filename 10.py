from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def f1():
    return render_template('10.html')


@app.route('/10result', methods=['POST', 'GET'])
def f2():
    if request.method == 'POST':
        result = request.form.get('string1')
        return render_template("10result.html", result=result)


@app.route('/')
def f3():
    return render_template('10result.html')


@app.route('/10result1', methods=['POST', 'GET'])
def f4():
    if request.method == 'POST':
        a1 = request.form.get('string2')
        a2=request.form.get('string1')
        result1='a1'+'a2'
        return render_template("10result1.html", result1=result1)


if __name__ == '__main__':
    app.run(debug=True)
