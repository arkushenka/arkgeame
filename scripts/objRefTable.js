const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Твёрдый: 0},
	{Спрайт: 0},
	{Спрайт2: 0},
	{ТайловыйФон: 0},
	{Спрайт3: 0},
	{Текст: 0},
	{Спрайт4: 0},
	{Платформер: 0},
	{СледитьЗа: 0},
	{Спрайт5: 0},
	{Спрайт6: 0},
	{Спрайт7: 0},
	{Спрайт8: 0},
	{Спрайт9: 0}
];

self.InstanceType = {
	Спрайт: class extends self.ISpriteInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {},
	Спрайт4: class extends self.ISpriteInstance {},
	Спрайт5: class extends self.ISpriteInstance {},
	Спрайт6: class extends self.ISpriteInstance {},
	Спрайт7: class extends self.ISpriteInstance {},
	Спрайт8: class extends self.ISpriteInstance {},
	Спрайт9: class extends self.ISpriteInstance {}
}