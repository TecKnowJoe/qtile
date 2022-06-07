#!/bin/sh
autorandr --change &
synology-drive start & 
#festival --tts $HOME/.config/qtile/welcome_msg &
#lxsession &
#conky -c $HOME/.config/conky/doomone-qtile.conkyrc
volumeicon &
nm-applet &
blueman-applet &
nitrogen --restore --set-zoom-fill &
dunst &
picom &
