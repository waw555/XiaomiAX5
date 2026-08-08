Xiaomi AX5 (RA67) firmware 1.0.105 — unpacking notes

Source: miwifi_ra67_firmware_59980_1.0.105.bin
SHA-256: e910e8a69acf6e6f1a49c7e9fc222621ed996ceafa44071bc9e7f76e21c5b295
Build date from firmware header: 2023-02-07 11:52:12 UTC

Container layout:
- Xiaomi HDR1 header: offset 0x000000, size 0x2B0 bytes
- UBI image: offset 0x0002B0
- PEB size: 131072 bytes
- LEB size: 126976 bytes

UBI volumes:
- kernel.fit: ARM OpenWrt FIT image, Linux 4.4.x
- rootfs.squashfs: SquashFS root filesystem
- rootfs_data.img: empty autoresize volume in the factory image

Directories:
- rootfs/ — extracted SquashFS filesystem
- volumes/ — raw extracted UBI volume payloads

Note: /dev/console is a character-device entry in SquashFS. It was not recreated
inside this archive because the extraction environment does not allow creating
device nodes. This does not affect inspection or modification of ordinary files.
