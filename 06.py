from flask import Flask, redirect, url_for, request,render_template
app = Flask(__name__)

@app.route('/log/<sum>')
def log(name):
   return render_template('log.html', name = sum)

@app.route('/login',methods = ['POST','GET'])
def login():
   if request.method == 'POST':
      user = request.form['nm']
      user1 =request.form['nm1']
      sum=int(user)+int(user1);
      return redirect(url_for('log',name = sum))

   else:
      user = request.args.get('nm')
      return redirect(url_for('success',name = user))

if __name__ == '__main__':
   app.run(debug = True)
