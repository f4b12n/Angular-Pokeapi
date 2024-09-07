import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './pokemon-dialog.component.html',
  styleUrl: './pokemon-dialog.component.scss'
})

export class PokemonDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PokemonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
) { }

closeDialog(): void {
    this.dialogRef.close();
}
}
