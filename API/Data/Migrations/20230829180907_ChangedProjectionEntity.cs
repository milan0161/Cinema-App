using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class ChangedProjectionEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Seats_Halls_HallId",
                table: "Seats");

            migrationBuilder.RenameColumn(
                name: "HallId",
                table: "Seats",
                newName: "ProjectionId");

            migrationBuilder.RenameIndex(
                name: "IX_Seats_HallId",
                table: "Seats",
                newName: "IX_Seats_ProjectionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Seats_Projections_ProjectionId",
                table: "Seats",
                column: "ProjectionId",
                principalTable: "Projections",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Seats_Projections_ProjectionId",
                table: "Seats");

            migrationBuilder.RenameColumn(
                name: "ProjectionId",
                table: "Seats",
                newName: "HallId");

            migrationBuilder.RenameIndex(
                name: "IX_Seats_ProjectionId",
                table: "Seats",
                newName: "IX_Seats_HallId");

            migrationBuilder.AddForeignKey(
                name: "FK_Seats_Halls_HallId",
                table: "Seats",
                column: "HallId",
                principalTable: "Halls",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
