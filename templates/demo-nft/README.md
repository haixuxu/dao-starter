

# [Non-fungible token](https://wiki.gear-tech.io/docs/examples/Standards/gnft-721)

### 🏗️ Building

```sh
cargo b -p "demo-nft*"
```

### ✅ Testing

Run all tests, except `gclient` ones:
```sh
cargo t -p "demo-nft*" -- --skip gclient
```

Run all tests:
```sh
# Download the node binary.
cargo xtask node
cargo t -p "demo-nft*"
```
