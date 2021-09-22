let path = require('path');
let exec = require('child_process').exec;

test('Code should be 0 for valid signature', async () => {
    let result = await cli(['02849ff0f6bb5156afe079457f68103ffa46ea1ef15652b90e327230d93e2d1c20', 'testtest', '304602210084cdfa969e1789855db5e5ccb8119b367a5d17b45bed5688bf4cc76e89a4a1d5022100a0c566fde5894e93a60d5bf717739b2bc29da108f928b0c22b5541a5508f9e87'], '.');
    expect(result.code).toBe(0);
})

test('Code should be 1 for invalid signature', async () => {
    let result = await cli(['02849ff0f6bb5156afe079457f68103ffa46ea1ef15652b90e327230d93e2d1c21', 'testtest', '304602210084cdfa969e1789855db5e5ccb8119b367a5d17b45bed5688bf4cc76e89a4a1d5022100a0c566fde5894e93a60d5bf717739b2bc29da108f928b0c22b5541a5508f9e87'], '.');
    expect(result.code).toBe(1);
})

function cli(args, cwd) {
    return new Promise(resolve => {
        exec(`node ${path.resolve('./index')} ${args.join(' ')}`,
            { cwd },
            (error, stdout, stderr) => {
                resolve({
                    code: error && error.code ? error.code : 0,
                    error,
                    stdout,
                    stderr
                })
            })
    })
}