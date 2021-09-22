# elliptic-signature-validation
Verify an elliptic validation with DER format.

# Install

```bash
git clone git@github.com:gilles-hemmerle/elliptic-signature-validation.git
npm i
node index.js --help
```
 
 # Useage example
 
 ```bash
node index.js 02849ff0f6bb5156afe079457f68103ffa46ea1ef15652b90e327230d93e2d1c20 testtest 304602210084cdfa969e1789855db5e5ccb8119b367a5d17b45bed5688bf4cc76e89a4a1d5022100a0c566fde5894e93a60d5bf717739b2bc29da108f928b0c22b5541a5508f9e8
echo $? # to display the exit code, 0 if signature is correct, 1 if not
```
